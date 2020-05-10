<template>
    <div class = "browse account-management">
        <AccountHeader/>
        <div class = "main-content">
            <div class = "row">
                <div class="col-md-2 mb-3">
                    <AccountSidebar/>
                </div>
                <div class = "col-md-10" >
                    <div class = "account-inner-content general-information">
                        <div class = "row title">
                            <h2>General Information</h2>
                            <p>Here you can edit your contact information and profile information.</p>
                        </div>
                        <div class = "row body">
                            <div class = "col-lg-6 col-md-12">
                                <div class = "fluid">
                                    <div class = "profile-picture-holder">
                                        <img id = "profile-picture-box" src = "../../assets/images/profile_pic.png"/>
                                        <p id = "profile-picture"><a href = "javascript:void(0)" @click="editField('profile-picture')">Edit Profile Picture</a></p>
                                        <div class = "property-edit" id = "profile-picture-edit">
                                            <input type = "text" name = "profile-picture-agency" placeholder="Browse">
                                            <input type = "file" name = "profile-picture" style = "display:none">
                                            <button type = "button" class = "btn btn-edit-save" @click="profilePictureChange()">Submit</button>
                                        </div>
                                    </div>
                                    <p id = "img-description">
                                        {{imgDescription}}
                                        <a href = "javascrit:void(0)" @click="editField('img-description')">(Edit)</a>
                                    </p>
                                    <div class = "property-edit vertical" id = "img-description-edit">
                                        <textarea name = "imgDescription" :value="imgDescription"></textarea>
                                        <button type = "button" class = "btn btn-edit-save" @click="imageDescriptionChange()">Submit</button>
                                    </div>
                                </div>
                                <div class = "fluid">
                                    <p class = "property-name">Username</p>
                                    <p class = "property-value">{{firstName}} {{lastName}}</p>
                                </div>

                                <div class = "fluid">
                                    <p class = "property-name">First Name</p>
                                    <p class = "property-value" id = "first-name">{{firstName}}<a href = "javascript:void(0)" @click="editField('first-name')">(Edit)</a></p>
                                    <div class = "property-edit" id = "first-name-edit">
                                        <input type = "text" name = "first-name" :value="firstName">
                                        <button type = "button" class = "btn btn-edit-save" @click="firstNameChange()">Submit</button>
                                    </div>
                                </div>

                                <div class = "fluid">
                                    <p class = "property-name">Last Name</p>
                                    <p class = "property-value" id = "last-name">{{lastName}}<a href = "javascript:void(0)" @click="editField('last-name')">(Edit)</a></p>
                                    <div class = "property-edit" id = "last-name-edit">
                                        <input type = "text" name = "last-name" :value="lastName">
                                        <button type = "button" class = "btn btn-edit-save" @click="lastNameChange()">Submit</button>
                                    </div>
                                </div>
                                <div class = "fluid">
                                    <p class = "property-name">Email</p>
                                    <p class = "property-value" id = "email">{{eMail}}<a href = "javascript:void(0)" @click="editField('email')">(Edit)</a></p>
                                    <div class = "property-edit" id = "email-edit">
                                        <input type = "email" name = "email" :value="eMail">
                                        <button type = "button" class = "btn btn-edit-save" @click="eMailChange()">Submit</button>
                                    </div>
                                </div>
                                <div class = "fluid">
                                    <p class = "property-name">Address</p>
                                    <p class = "property-value" id = "address">{{address_1}}<br>{{address_2}}<a href = "javascript:void(0)" @click="editField('address')">(Edit)</a></p>
                                    <div class = "property-edit vertical" id = "address-edit">
                                        <input type = "text" name = "address_1" :value="address_1">
                                        <input type = "text" name = "address_2" :value="address_2">
                                        <button type = "button" class = "btn btn-edit-save" @click="addressChange()">Submit</button>
                                    </div>
                                </div>

                                <div class = "fluid">
                                    <p class = "property-name">Phone Number</p>
                                    <p class = "property-value" id = "phone">{{phoneNumber}}<a href = "javascript:void(0)" @click="editField('phone')">(Edit)</a></p>
                                    <div class = "property-edit" id = "phone-edit">
                                        <input type = "tel" name = "phonenumber" :value="phoneNumber">
                                        <button type = "button" class = "btn btn-edit-save" @click="phoneNumberChange()">Submit</button>
                                    </div>
                                </div>

                                <div class = "fluid">
                                    <p class = "property-name">Website</p>
                                    <p class = "property-value" id = "website">{{websiteAddress}}<a href = "javascript:void(0)" @click="editField('website')">(Edit)</a></p>
                                    <div class = "property-edit" id = "website-edit">
                                        <input type = "text" name = "website" :value="websiteAddress">
                                        <button type = "button" class = "btn btn-edit-save" @click="websiteChange()">Submit</button>
                                    </div>
                                </div>

                                <div class = "fluid">
                                    <p class = "property-name">Link to Social Media Accounts</p>
                                    <div class = "social-link-edit">
                                        <div class = "social-link-edit-item">
                                            <img src = "../../assets/images/social-icon/social-facebook.png">
                                            <input class = "grey-background" type = "text" name = "facebook-url" id = "facebook-rul" />
                                        </div>
                                        <div class = "social-link-edit-item">
                                            <img src = "../../assets/images/social-icon/social-twitter.png">
                                            <input class = "grey-background" type = "text" name = "facebook-url" id = "facebook-rul" />
                                        </div>
                                        <div class = "social-link-edit-item">
                                            <img src = "../../assets/images/social-icon/social-youtube.png">
                                            <input class = "grey-background" type = "text" name = "facebook-url" id = "facebook-rul" />
                                        </div>
                                        <div class = "social-link-edit-item">
                                            <img src = "../../assets/images/social-icon/social-instagram.png">
                                            <input class = "grey-background" type = "text" name = "facebook-url" id = "facebook-rul" />
                                        </div>
                                        <div class = "social-link-edit-item">
                                            <img src = "../../assets/images/social-icon/social-linkedin.png">
                                            <input class = "grey-background" type = "text" name = "facebook-url" id = "facebook-rul" />
                                        </div>



                                    </div>
                                </div>
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
</template>
<script>
import AccountHeader from "./AccountHeader";
import AccountSidebar from "./AccountSideBar";

export default {
  name: 'browse-photo',
  data() {
    return {
        profilePictureSrc: '',
        firstName: 'Kodi',
        lastName: 'Bobo',
        eMail: 'KodiBobo@gmail.com',
        address_1: '642 Peachtree Rd.',
        address_2: 'Atlanta, GA 30106',
        phoneNumber: '+1 222.333.444',
        websiteAddress: 'www.kodibobo.com',
        imgDescription: 'Hi! I am an artist and graphic designer with a bachelor’s in Printmaking and Illustration and Master’s in Printmaking. I spend my time traveling the world, working and snapping photos and taking videos of amazing people and places!'
    }
  },
  components : {
      AccountHeader,
      AccountSidebar
  },
  mounted() {
    let this_ = this;
    $(window).scrollTop(0);
    $('body').addClass('internal');
    $('body').addClass('account-footer');
    $('body').removeClass('no-footer');
    $('body').removeClass('blank');
    $('#app').removeClass('single-page');


    $('input[name="profile-picture-agency"]').click(function() {
         $('input[name="profile-picture"]').click();
    });

    $('input[name="profile-picture"]').change(function(){
        this_.readURL(this);
        let filename = $('input[name="profile-picture"]').val();
        $('input[name="profile-picture-agency"]').val(filename);
    });

  },
  methods: {
      saveChanges() {
          $('p.alert-save').addClass('shows');
      },

      editField(id_field) {
          $('#'+id_field).css('display', 'none');
          $('.property-edit#' + id_field + '-edit').css('display', 'flex');
      },

      firstNameChange() {
        this.firstName = $('input[name="first-name"]').val();
        $('#first-name').css('display', 'block');
        $('.property-edit#first-name-edit').css('display', 'none');
      },

      lastNameChange() {
        this.lastName = $('input[name="last-name"]').val();
        $('#last-name').css('display', 'block');
        $('.property-edit#last-name-edit').css('display', 'none');
      },
      
      eMailChange() {
        this.eMail = $('input[name="email"]').val();
        $('#email').css('display', 'block');
        $('.property-edit#email-edit').css('display', 'none');
      },

      addressChange() {
        this.address_1 = $('input[name="address_1"]').val();
        this.address_2 = $('input[name="address_2"]').val();
        $('#address').css('display', 'block');
        $('.property-edit#address-edit').css('display', 'none');
      },

      phoneNumberChange() {
          this.phoneNumber = $('input[name="phonenumber"]').val();
          $('#phone').css('display', 'block');
          $('.property-edit#phone-edit').css('display', 'none');
      },

      websiteChange() {
          this.websiteAddress = $('input[name="website"]').val();
          $('#website').css('display', 'block');
          $('.property-edit#website-edit').css('display', 'none');
      },

      imageDescriptionChange() {
          this.imgDescription = $('textarea[name="imgDescription"]').val();
          $('#img-description').css('display', 'block');
          $('#img-description-edit').css('display', 'none');
      },

      profilePictureChange() {
        $('#profile-picture-box').attr('src', this.profilePictureSrc);
      },

      readURL(input) {
        let this_ = this;
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                this_.profilePictureSrc = e.target.result;
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

  }
}
</script>
