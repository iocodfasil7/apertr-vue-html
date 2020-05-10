<template>
    <div class = "browse contact-us">
        <section id = "contact-box" class = "section">
            <div class = "row">
                <div class = "col-lg-3 col-md-3"></div>
                <div class = "col-lg-6 col-md-6 col-sm-12">
                    <p class = "section-title">
                        Contact Us
                    </p>
                    <div class = "contact-content">
                        <div class = "form-fluid">
                            <p>Name</p>
                            <input type = "text" name = "c_name" id = "c_name" placeholder="Enter Name">
                        </div>

                        <div class = "form-fluid">
                            <p>Email</p>
                            <input type = "text" name = "c_email" id = "c_email" placeholder="Enter Email">
                        </div>

                        <div class = "form-fluid">
                            <p>Your Message</p>
                            <textarea  name = "message" id = "message" placeholder="Type your message here."></textarea>
                        </div>

                        <div class = "form-fluid align-left">
                            <a href = "#" class = "btn btn-normal btn-rounded">Submit</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
  name: 'contact-us',
  data() {
    return {

    }
  },
  
  mounted() {
    $('body').addClass('internal');
    $('body').removeClass('account-footer');
    $('body').removeClass('no-footer');
    $('body').removeClass('blank');
    $('#app').removeClass('single-page');
    
  },
}
</script>
