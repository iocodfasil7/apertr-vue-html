import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import SignUp from "./components/SignUp.vue";
import SignUpSuccess from "./components/SignUpSuccess.vue";
import Profile from "./components/Profile.vue";
import Cart from "./components/Cart.vue";
import PaymentGateway from "./components/PaymentGateway.vue";
import PersonalFeed from "./components/PersonalFeed.vue";
import UploadPhoto from "./components/UploadPhoto.vue";
import SearchResult from "./components/SearchResult.vue";
import ContactUs from "./components/ContactUs.vue";
import Terms from "./components/Terms.vue";
import AboutUs from "./components/AboutUs.vue";
import FAQ from "./components/FAQ.vue";
import Policy from "./components/Privacy.vue";
import Download from "./components/Downloads.vue";


import BrowsePhoto from "./components/BrowsePhoto.vue";
import BrowseVideo from "./components/BrowseVideo.vue";
import Comment from "./components/Comment.vue";
import AccountManagementMain from "./components/account_management/AccountManagementMain.vue";
import AccountGeneralInformation from "./components/account_management/AccountGeneralInfomation.vue";
import AccountChangePassword from "./components/account_management/AccountChangePassword.vue";
import AccountEditPhoto from "./components/account_management/AccountEditPhoto.vue";
import AccountEditVideo from "./components/account_management/AccountEditVideo.vue";
import AccountFollowingManagement from "./components/account_management/AccountFollowingManagement.vue";
import AccountSalesHistory from "./components/account_management/AccountSalesHistory.vue";
import AccountGetPaid from "./components/account_management/AccountGetPaid.vue";
import AccountGetPaidSubLinkForMobile from "./components/account_management/AccountGetPaidSubLinkForMobile.vue";

import AccountGetPaidFailed from "./components/account_management/account_paid_management/AccountGetPaidFailed.vue";
import AccountGetPaidSuccess from "./components/account_management/account_paid_management/AccountGetPaidSuccess.vue";
import AccountGetPaidManage from "./components/account_management/account_paid_management/AccountGetPaidManage.vue";
import AccountGetPaidManageAdd from "./components/account_management/account_paid_management/AccountGetPaidManageAdd.vue";
import AccountGetPaidManageDel from "./components/account_management/account_paid_management/AccountGetPaidManageDel.vue";
import AccountGetPaidHistory from "./components/account_management/account_paid_management/AccountGetPaidHistory.vue";

import AccountNotificationManagement from "./components/account_management/AccountNotificationManagement.vue";
import AccountViewManageContent from "./components/account_management/AccountManageContent.vue";

import PaymentGatewaySuccess from "./components/payment_gateway/PaymentGatewaySuccessful.vue";
import PaymentGatewayUnsuccess from "./components/payment_gateway/PaymentGatewayUnsuccessful.vue";

import UploadSuccess from "./components/upload_video_photo/UploadSuccess.vue";
import UploadError from "./components/upload_video_photo/UploadError.vue";

import SignOut from "./components/Signout.vue";
import ErrorPage from "./components/404Page.vue";

import ForgotPassword from "./components/login/ForgotPassword.vue";
import ResetPassword from "./components/login/ResetPassword.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp
    },
    {
      path: "/signup/success",
      name: "signup_success",
      component: SignUpSuccess
    },

    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
    },
    {
      path: "/checkout",
      name: "payment_gateway",
      component: PaymentGateway
    },
    {
      path: "/feed",
      name: "personal_feed",
      component: PersonalFeed
    },
    {
      path: "/upload",
      name: "upload_photo",
      component: UploadPhoto
    },
    {
      path: "/search",
      name: "search",
      component: SearchResult
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactUs
    },
    {
      path: "/about_us",
      name: "about",
      component: AboutUs
    },
    {
      path: "/faq",
      name: "faq",
      component: FAQ
    },
    {
      path: "/terms_condition",
      name: "terms",
      component: Terms
    },
    {
      path: "/policy",
      name: "policy",
      component: Policy
    },
    {
      path: "/browse/photo",
      name: "browsePhoto",
      component: BrowsePhoto
    },
    {
      path: "/browse/video",
      name: "browseVideo",
      component: BrowseVideo
    },
    {
      path: "/comment",
      name: "comment",
      component: Comment
    },
    {
      path: "/account",
      name: "accountManagementMain",
      component: AccountManagementMain
    },
    {
      path: "/account/generalinformation",
      name: "accountGeneralInfo",
      component: AccountGeneralInformation
    },
    {
      path: "/account/changePassword",
      name: "changePassword",
      component: AccountChangePassword
    },
    {
      path: "/account/editphoto",
      name: "editPhoto",
      component: AccountEditPhoto
    },
    {
      path: "/account/editvideo",
      name: "editVideo",
      component: AccountEditVideo
    },
    {
      path: "/account/following",
      name: "followingManagement",
      component: AccountFollowingManagement
    },
    {
      path: "/account/saleshistory",
      name: "salesHistory",
      component: AccountSalesHistory
    },
    {
      path: "/account/getpaid",
      name: "getpaid",
      component: AccountGetPaid
    },
    {
      path: "/account/getpaid/oops",
      name: "getpaidfailed",
      component: AccountGetPaidFailed
    },
    {
      path: "/account/getpaid/success",
      name: "getpaidsuccess",
      component: AccountGetPaidSuccess
    },
    {
      path: "/account/getpaid/manage",
      name: "getpaidmanage",
      component: AccountGetPaidManage
    },
    {
      path: "/account/getpaid/manage/add",
      name: "getpaidmanageadd",
      component: AccountGetPaidManageAdd
    },
    {
      path: "/account/getpaid/manage/del",
      name: "getpaidmanagedel",
      component: AccountGetPaidManageDel
    },
    {
      path: "/account/getpaid/history",
      name: "getpaidhistory",
      component: AccountGetPaidHistory
    },
    {
      path: "/account/notification",
      name: "accountnotification",
      component: AccountNotificationManagement
    },
    {
      path: "/account/getpaid/sublinks",
      name: "accountsublinkformobile",
      component: AccountGetPaidSubLinkForMobile
    },
    {
      path: "/account/manage_content",
      name: "accountcontent",
      component: AccountViewManageContent
    },
    /****** Payment Gateway */
    {
      path: "/checkout/success",
      name: "paymentgatewaysuccss",
      component: PaymentGatewaySuccess
    },
    {
      path: "/payment_gateway/unsuccess",
      name: "paymentgatewayunsuccess",
      component: PaymentGatewayUnsuccess
    },
    /**** Upload Content */
    {
      path: "/upload/upload_success",
      name: "uploadsuccess",
      component: UploadSuccess
    },
    {
      path: "/upload/upload_error",
      name: "uploaderror",
      component: UploadError
    },

    /**** Sign Out */
    {
      path: "/signout",
      name: "signout",
      component: SignOut
    },
    {
      path: "/downloads",
      name: "donwload",
      component: Download
    },
    {
      path: "/404error",
      name: "404error",
      component: ErrorPage
    },
    { path: '*', 
      redirect: '/404error' },
    {
      path: "/forgot_password",
      name: "forgot_password",
      component: ForgotPassword
    },
    {
      path: "/reset_password",
      name: "reset_password",
      component: ResetPassword
    }
  ]
});
