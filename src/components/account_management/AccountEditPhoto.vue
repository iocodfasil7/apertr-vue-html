<template>
    <div class = "browse account-management">
        <AccountHeader/>
        <div class = "main-content">
            <div class = "row">
                <div class="col-md-2 mb-3">
                    <AccountSidebar/>
                </div>
                <div class = "col-md-10" >
                    <div class = "account-inner-content edit-photo-content">
                        <div class = "row title">
                            <h2>Edit Photo</h2>
                            <p>Make changes to your content</p>
                        </div>
                        <div class = "row body">
                            <div class = "col-12">
                                <div class = "col-lg-9 col-md-12">
                                    <div class = "img-holder">
                                        <img src = "../../assets/img-gallery-1.png">
                                    </div>
                                </div>
                                <div class = "col-lg-9 col-md-12 trash-row">
                                    <img src = "../../assets/images/trash_icon.svg">
                                </div>
                            </div>
                            <div class = "col-12">
                                <div class = "col-lg-8 col-md-12">
                                    <div class = "fluid">
                                        <p class = "property-name">Title</p>
                                        <p class = "property-value" id = "title">{{title}}<a href = "javascript:void(0)" @click="editField('title')">(Edit)</a></p>
                                        <div class = "property-edit" id = "title-edit">
                                            <input type = "text" name = "title" :value="title">
                                            <button type = "button" class = "btn btn-edit-save" @click="titleChange()">Submit</button>
                                        </div>
                                    </div>
                                    <div class = "fluid">
                                        <p class = "property-name">Description and Hashtags</p>
                                        <p class = "property-value" id = "description_hashtag">
                                            {{description}}
                                            <span>{{hashtag}}</span>
                                            <a href = "javascript:void(0)" @click="editField('description_hashtag')">(Edit)</a>
                                        </p>
                                        <div class = "property-edit vertical" id = "description_hashtag-edit">
                                            <textarea name = "description" :value="description"></textarea>
                                            <textarea name = "hashtag" :value="hashtag"></textarea>
                                            <div class = "btn-section">
                                                <button class = "btn btn-edit-save" @click="saveDescriptionHashtag()">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "fluid">
                                        <p class = "property-name">Categories (Select up to 3)</p>
                                        <div id = "categories">
                                            <p class = "property-value">{{category1}}</p>
                                            <p class = "property-value">{{category2}}</p>
                                            <p class = "property-value">{{category3}}<a href = "javascript:void(0)" @click="editField('categories')">(Edit)</a></p>
                                        </div>
                                        <div class = "property-edit vertical" id = "categories-edit">
                                            <select name = "categories1">
                                                <option>Landscapes1</option>
                                                <option>Landscapes2</option>
                                                <option>Landscapes3</option>
                                            </select>
                                            <select name = "categories2">
                                                <option>Travel1</option>
                                                <option>Travel2</option>
                                                <option>Travel3</option>
                                            </select>
                                            <select name = "categories3">
                                                <option>Nature1</option>
                                                <option>Nature2</option>
                                                <option>Nature3</option>
                                            </select>

                                            <div class = "btn-section">
                                                <button class = "btn btn-edit-save" @click="saveCategories()">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class = "fluid">
                                        <p class = "property-name">Resolution</p>
                                        <p class = "property-value" id = "resolution">{{resolution_width}}px * {{resolution_height}}px<a href = "javascript:void(0)" @click="editField('resolution')">(Edit)</a></p>
                                        <div class = "property-edit" id = "resolution-edit">
                                            <input type = "number" name = "resolution_width" :value="resolution_width">
                                            <p style = "display:flex; align-items:center; padding-left: 10px; padding-right: 10px;height: 100%; margin-bottom: 0px;">*</p>
                                            <input type = "number" name = "resolution_height" :value="resolution_height">
                                            <button type = "button" class = "btn btn-edit-save" @click="saveResolution()">Submit</button>
                                        </div>
                                    </div>
                                    <div class = "fluid">
                                        <p class = "property-name">Camera Type</p>
                                        <p class = "property-value" id = "camera-type">{{cameraType}}<a href = "javascript:void(0)" @click="editField('camera-type')">(Edit)</a></p>
                                        <div class = "property-edit" id = "camera-type-edit">
                                            <input type = "text" name="camera-type" :value="cameraType">
                                            <button type = "button" class = "btn btn-edit-save" @click="saveCameraType()">Submit</button>
                                        </div>
                                    </div>
                                    <div class = "fluid">
                                        <p class = "property-name" style = "margin-bottom: -10px;">Your Price</p>
                                        <span class = "property-description">Please note a 10% Apertr fee will be deducted from this amount upon purchase.</span>
                                        <p class = "property-value" id="price">{{price}}<a href = "javascript:void(0)" @click="editField('price')">(Edit)</a></p>
                                        <div class = "property-edit" id = "price-edit">
                                            <input type = "text" name = "price" :value="price">
                                            <button type = "button" class = "btn btn-edit-save" @click="savePrice()">Submit</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class = "col-12">
                                <div class = "col-lg-9 col-md-12">
                                    <div class = "fluid align-center button-group">
                                        <button class = "btn btn-normal btn-rounded btn-save" @click="saveChanges()">Save Changes</button>
                                        <p class = "alert-save">Changes Saved!</p>
                                        <router-link class = "toBackAccountMenu" to = "/account">Return to Account Management</router-link>

                                    </div>
                                </div>
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
  name: 'edit-photo',
  data() {
    return {
        title: 'Spanish Landscape',
        description: 'Photo description goes here. This is a shot of an old, beautiful, medieval town in Rupit, Spain.',
        hashtag: '#Fall #Rupit #Castle #FallLeaves #Medieval #Spain #Mountains #Landscape #TravelPhotography',
        category1: 'Landscape1',
        category2: 'Travel1',
        category3: 'Nature1',
        resolution_width: 1400,
        resolution_height: 800,
        cameraType: 'Canon  5D Mark 3',
        price: '$0.75'
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


    $('a.manage-content').addClass('router-link-exact-active');
    $('a.manage-content').addClass('router-link-active');


  },
  methods: {
    saveChanges() {
        $('p.alert-save').addClass('shows');
    },
    editField(id_field) {
        $('#'+id_field).css('display', 'none');
        $('.property-edit#' + id_field + '-edit').css('display', 'flex');
    },

    titleChange() {
        this.title = $('input[name=title]').val();
        $('#title').css('display', 'block');
        $('.property-edit#title-edit').css('display', 'none');
    },

    saveDescriptionHashtag() {
        this.description = $('textarea[name=description]').val();
        this.hashtag = $('textarea[name=hashtag]').val();
        $('#description_hashtag').css('display', 'block');
        $('.property-edit#description_hashtag-edit').css('display', 'none');
    },

    saveCategories() {
        this.category1 = $('select[name=categories1]').val();
        this.category2 = $('select[name=categories2]').val();
        this.category3 = $('select[name=categories3]').val();
        $('#categories').css('display', 'block');
        $('.property-edit#categories-edit').css('display', 'none');
    },

    saveResolution() {
        this.resolution_width = $('input[name=resolution_width]').val();
        this.resolution_height = $('input[name=resolution_height]').val();
        $('#resolution').css('display', 'block');
        $('.property-edit#resolution-edit').css('display', 'none');
    },

    saveCameraType() {
        this.cameraType = $('input[name=camera-type]').val();
        $('#camera-type').css('display', 'block');
        $('.property-edit#camera-type-edit').css('display', 'none');

    },

    savePrice() {
        this.price = $('input[name=price]').val();
        $('#price').css('display', 'block');
        $('#price-edit').css('display', 'none');
    }
  }
}
</script>

