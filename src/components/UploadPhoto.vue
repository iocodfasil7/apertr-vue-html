<template>
<div class = "browse upload-content-page photo-upload">
    <section id = "header"></section>
    <section id = "main-content" class = "section">
        <div class = "row">

                <div class = "col-lg-2 col-md-1"></div>
                <div class = "col-lg-8 col-md-10">
                    <div class = "content-box">
                        <p class = "page-title">Upload Content</p>
                        <div class = "main-content-box">
                            <div class = "form-fluid-row select-content-type-group">
                                <div class = "radio-btn">
                                    <input type="radio" id="photo-type" name="content-type" @click="on_click_upload_photo()" checked />
                                    <label for="photo-type">  <span></span> Photo </label>
                                </div>
                                <div class = "radio-btn">
                                    <input type="radio" id="video-type" name="content-type"  @click="on_click_upload_video()" />
                                    <label for="video-type">  <span></span> Video </label>
                                </div>
                            </div>
                            <div class = "form-fluid for-photo">
                                <p>Select your photo</p>
                                <input type = "text" name = "uploaded_photo" id = "uploaded_photo" placeholder=".jpeg, .png, .tiff"/>
                                <input type = "file" name = "photo_file" id = "photo_file" accept="image/*" style = "display:none" @change = "file_uploaded()"/>
                                <div class = "right-align">
                                    <a href = "javascript:void(0)" @click = "on_btn_upload_photo()" class = "btn btn-normal btn-rounded" style="padding: 5px 30px;">Browse</a>
                                </div>
                            </div>

                            <div class = "form-fluid for-video">
                                <p>Select your video</p>
                                <input type = "text" name = "uploaded_video" id = "uploaded_video" placeholder=".mov, .m4v, .mp4"/>
                                <input type = "file" name = "video_file" id = "video_file" accept="video/*" style = "display:none" @change = "video_file_uploaded()"/>
                                <div class = "right-align">
                                    <a href = "javascript:void(0)" @click = "on_btn_upload_video()" class = "btn btn-normal btn-rounded" style="padding: 5px 30px;">Browse</a>
                                </div>
                            </div>

                            <div class = "form-fluid">
                                <p>Title</p>
                                <input type = "text" name = "title" id = "title" placeholder="Enter Title"/>
                            </div>

                            <div class = "form-fluid">
                                <p>Description</p>
                                <textarea type = "text" name = "description" id = "dscription" placeholder="Enter Description"/>
                            </div>

                            <div class = "form-fluid">
                                <p>Hashtags</p>
                                <textarea type = "text" name = "hashtags" id = "hashtags" placeholder="Enter up to 15 hashtags"/>
                            </div>

                            <div class = "form-fluid">
                                <p>Categories(Select up to 3)</p>
                                <select>
                                    <option>Category1</option>
                                    <option>Category2</option>
                                    <option>Category3</option>
                                </select>
                                <select>
                                    <option>Category1</option>
                                    <option>Category2</option>
                                    <option>Category3</option>
                                </select>
                                <select>
                                    <option>Category1</option>
                                    <option>Category2</option>
                                    <option>Category3</option>
                                </select>
                            </div>

                            <div class = "form-fluid">
                                <p>Resolution</p>
                                <div class = "resolution-group">
                                    <input type = "number" name = "res_width" id = "title" placeholder="px"/>
                                    <span>x</span>
                                    <input type = "number" name = "res_height" id = "title" placeholder="px"/>   
                                </div>
                            </div>

                            <div class = "form-fluid">
                                <p>Camera Type</p>
                                <input type = "text" name = "camera_type" id = "camera_type" placeholder="i.e. Cannon 5D Mark III"/>
                            </div>

                            <div class = "form-fluid for-video">
                                <p>FPS (Frames per Second)</p>
                                <input type = "text" name = "fps" id = "fps" placeholder="i.e. Cannon 5D Mark III"/>
                            </div>

                            <div class = "form-fluid">
                                <p style = "margin-bottom: 0px">Your Price</p>
                                <span class = "description">Please note a 10% Apertr fee will be deducted from this amount upon purchase</span>
                                <input style = "margin-top: 20px;" type = "text" name = "price" id = "price" placeholder="$0.00"/>
                            </div>

                            <div class="form-fluid terms-body">
                                <input type="checkbox" id="terms_condition">
                                <label for="terms_condition">By checking this box I am confirming I have all rights to this content and I agree to the <router-link to = "/terms_condition">Terms and Conditions.</router-link></label>
                            </div>

                            <div class = "form-fluid align-center submit-section">
                                <a href = "javascript:void(0)" @click="validation()" class = "btn btn-normal btn-rounded">Submit</a>
                            </div>
                        </div>
                    </div>
                </div>
                
        </div>
    </section>
</div>
</template>
<script>
import InternalBanner from "./InternalBanner";
import OtherPopularCategory from "./PopularCategory";
import BrowsePageCategory from "./BrowsPageCategory";
export default {
  name: 'payment-gateway-page',
  data() {
    return {
        content_type: 'photo',
        lst_popular_categories: []
    }
  },
  components : {
      InternalBanner,
      OtherPopularCategory,
      BrowsePageCategory
  },
  mounted() {
    $(window).scrollTop(0);

    $('body').addClass('internal');
    $('body').addClass('no-footer');
    $('body').removeClass('account-footer');
    $('body').removeClass('blank');
    $('#app').removeClass('single-page');

    $('.for-video').css('display', 'none');
  },

  methods: {
    on_click_upload_photo() {
        this.content_type = 'photo';
        $('.for-video').css('display', 'none');
        $('.for-photo').css('display', 'block');
    },
    on_click_upload_video() {
        this.content_type = 'video';
        $('.for-video').css('display', 'block');
        $('.for-photo').css('display', 'none');
    },
    on_btn_upload_photo() {
        $('#photo_file').click();
    },
    file_uploaded() {
        $('input[name="uploaded_photo"]').val($('#photo_file').val());
    },
    on_btn_upload_video() {
        $('#video_file').click();
    },
    video_file_uploaded() {
        $('input[name="uploaded_video"]').val($('#video_file').val());
    },
    validation() {
        let names = [];
        if(this.content_type == 'photo') {
            names = ['uploaded_photo', 'title', 'description', 'hashtags', 'res_width', 'res_height', 'camera_type',  'price'];
        } else {
            names = ['uploaded_video', 'title', 'description', 'hashtags', 'res_width', 'res_height', 'camera_type', 'fps', 'price'];

        }
        for(let i = 0 ; i < names.length ; i++) {
            let val = '';
            if ( i == 2 || i == 3 ) {
                val = $('textarea[name="' + names[i] + '"]').val();
            } else {
                val = $('input[name="' + names[i] + '"]').val();
            }

            if (val.length < 1) {
                if ( i == 2 || i == 3 ) {
                    $('textarea[name="' + names[i] + '"]').focus();
                } else{
                    $('input[name="' + names[i] + '"]').focus();
                }
                return;
            }
        }
        this.$router.push('/upload/upload_success');
    }

  }
}
</script>
