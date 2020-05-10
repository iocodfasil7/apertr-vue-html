<template>
    <div class = "browse account-management">
        <AccountHeader/>
        <div class = "main-content">
            <div class = "row">
                <div class="col-md-2 mb-3">
                    <AccountSidebar/>
                </div>
                <div class = "col-md-10" >
                    <div class = "account-inner-content sales-history-content">
                        <div class = "row title">
                            <h2>Sales History</h2>
                            <p>Here you can view all of your sales.</p>
                        </div>
                        <div class = "row body">
                            <p class = "showing-page-info">Viewing {{firstRow}}-{{endRow}} of 142 Records</p>
                            <div class = "col-12" style = "padding-left:0px; padding-right: 0px;">
                                <div class = "sale-row-total">
                                    <p>Overall Total</p>
                                    <p>$121.00</p>
                                </div>
                                <div>
                                    <div class = "sale-row" v-for="index in 142" id = "index" :key = "index">
                                        <div class = "left">
                                            <p class = "date">04/12/19</p>
                                            <p class = "name">Photo - Spanish Landscape</p>
                                        </div>
                                        <p class = "price">$0.{{index}}</p>
                                    </div>
                                </div>
                                <div class = "sale-row-total">
                                    <p>Overall Total</p>
                                    <p>$121.00</p>
                                </div>

                                <div class = "pagination-row">
                                    <ul class = "pagination">
                                        <li><a href = "javascript:void(0)" @click="toPreviousPage()"><<</a></li>
                                        <li class = "page-1"><a href = "javascript:void(0)" @click="toMovePage(1)">1</a></li>
                                        <li class = "page-2"><a href = "javascript:void(0)" @click="toMovePage(2)">2</a></li>
                                        <li><a href = "javascript:void(0)" @click="toNextPage()">>></a></li>
                                        <li>Out of 2</li>
                                    </ul>
                                </div>
                            </div>
                            <div class = "fluid align-center button-group">
                                <router-link class = "toBackAccountMenu" to = "/account">Return to Account Management</router-link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
import AccountHeader from "./AccountHeader";
import AccountSidebar from "./AccountSideBar";

export default {
  name: 'browse-photo',
  data() {
    return {
        totalRow: 142,
        currentPage: 1,
        firstRow: 1,
        endRow: 100
    }
  },
  components : {
      AccountHeader,
      AccountSidebar
  },
  mounted() {
    $(window).scrollTop(0);
    $('body').addClass('internal');
    $('body').addClass('account-footer');
    $('body').removeClass('no-footer');
    $('body').removeClass('blank');
    $('#app').removeClass('single-page');

    $('.page-' + this.currentPage).addClass('selected');
    for(let i = 101; i <= 142; i ++) {
        $('.sales-history-content .sale-row:nth-child(' + i + ')').css('display', 'none');
    }
  },

  methods: {
      toMovePage(page) {
        $('.page-' + this.currentPage).removeClass('selected');
        $('.page-' + page).addClass('selected');
        this.currentPage = page;
        if ( page == 2 ) {
            for(let i = 1; i <= 100; i ++) {
                $('.sales-history-content .sale-row:nth-child(' + i + ')').css('display', 'none');
            }

            for(let i = 101; i <= 142; i ++) {
                $('.sales-history-content .sale-row:nth-child(' + i + ')').css('display', 'flex');
            }

            this.firstRow = 101;
            this.endRow = 142;
        } else {
            for(let i = 1; i <= 100; i ++) {
                $('.sales-history-content .sale-row:nth-child(' + i + ')').css('display', 'flex');
            }

            for(let i = 101; i <= 142; i ++) {
                $('.sales-history-content .sale-row:nth-child(' + i + ')').css('display', 'none');
            }

            this.firstRow = 1;
            this.endRow = 100;
        }
      },

      toPreviousPage() {
        if (this.currentPage > 1) {
            this.toMovePage(this.currentPage - 1);
        }
      },

      toNextPage() {
        if (this.currentPage < 2) {
            this.toMovePage(this.currentPage + 1);
        }
      }
  }
}
</script>
