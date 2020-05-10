<template>
    <div class = "browse account-management">
        <AccountHeader/>
        <div class = "main-content">
            <div class = "row">
                <div class="col-md-2 mb-3">
                    <AccountSidebar/>
                </div>
                <div class = "col-md-10" >

                    <p class = "current-balance">
                        Current Balance: $42.50
                    </p>

                    <div class = "account-inner-content get-paid-manage-content sales-history-content">
                        <div class = "row title">
                            <h2>Manage Payment Account</h2>
                            <p>Here you decide where you want your money to go.</p>
                        </div>
                        <div class = "row body">
                            <p class = "showing-page-info">Viewing {{firstRow}}-{{endRow}} of 20 Records</p>
                            <div class = "col-12" style = "padding-left:0px; padding-right:0px;">
                                <div class = "sale-row-total">
                                    <p>Overall Total</p>
                                    <p>$121.00</p>
                                </div>
                                <div>
                                    <div class = "sale-row" v-for="index in 20" :key = "index">
                                        <div class = "left">
                                            <p class = "date">04/12/19</p>
                                            <p class = "name">Photo - Spanish Landscape</p>
                                        </div>
                                        <p class = "price">$0.75</p>
                                    </div>
                                </div>
                                <div class = "sale-row-total">
                                    <p>Overall Total</p>
                                    <p>$121.00</p>
                                </div>

                                <div class = "pagination">

                                </div>
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

                            <div class = "fluid align-center button-group">
                                <router-link class = "toBackAccountMenu" to = "/account/getpaid/sublinks">Return to Balance and Payment Details</router-link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
import AccountHeader from "../AccountHeader";
import AccountSidebar from "../AccountSideBar";

export default {
  name: 'account-get-paid-manage',
  data() {
    return {
        currentPage: 1,
        totalRow: 20,
        firstRow: 1,
        endRow: 12
    }
  },
  components : {
      AccountHeader,
      AccountSidebar
  },
  mounted() {
    $(window).scrollTop(0);
    $('.page-' + this.currentPage).addClass('selected');
    $('a.dropdown-toggle').addClass('click');
    $('body').addClass('internal');
    $('body').addClass('account-footer');
    $('body').removeClass('no-footer');
    $('body').removeClass('blank');
    $('#app').removeClass('single-page');

  },

  methods: {
      toMovePage(page) {
        $('.page-' + this.currentPage).removeClass('selected');
        $('.page-' + page).addClass('selected');
        this.currentPage = page;
        if ( page == 2 ) {
            for(let i = 1; i <= 12; i ++) {
                $('.sales-history-content .sale-row:nth-child(' + i + ')').css('display', 'none');
            }

            for(let i = 13; i <= 20; i ++) {
                $('.sales-history-content .sale-row:nth-child(' + i + ')').css('display', 'flex');
            }

            this.firstRow = 13;
            this.endRow = 20;
        } else {
            for(let i = 1; i <= 12; i ++) {
                $('.sales-history-content .sale-row:nth-child(' + i + ')').css('display', 'flex');
            }

            for(let i = 13; i <= 20; i ++) {
                $('.sales-history-content .sale-row:nth-child(' + i + ')').css('display', 'none');
            }

            this.firstRow = 1;
            this.endRow = 12;
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
