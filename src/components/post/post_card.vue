<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="post_view_section">
          <div class="normal_post_wrap">
            <div class="view_post_user_pic">
              <span>
                <img src="https://images.pitchie.com/avatars/38/dDyWf4AjZYFB8UScgKIxX0ljCdnW86rWSLGfheua.jpeg"/>
              </span>
            </div>
            <div class="post_name_time_setting">
              <div class="post_name_time">
                <a>Rai Ahmad Fraz</a>
                <a>
                  <label>19 march 11:12AM</label>
                </a>
              </div>
              <!-- <div class="post_setting">
                    <i class="material-icons">
                        more_horiz
                    </i>
                    <div class="post_setting_dropdown" style="display:block">
                        <ul>
                            <li>
                                <i class="zmdi zmdi-delete"></i>
                                <a href="javascript:void(0)">Delete</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div> -->
              <div class="clearfix"></div>
            </div>
            <div class="post_view_area">
              <div class="post_view_details">
                <div class="post_area">
                  <div class="">
                    <p dir="auto">Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="post_view_area">
              <div class="post_view_details">
                <div class="post_area">
                  <label class="like_coments">0 <span>Like</span></label>
                  <label class="like_coments"> 0 Comments</label>
                </div>
              </div>
              <div class="comments_view_details_section">
                <div class="comments_view_outer">
                  <div class="commenter_text_add_inner">
                    <div class="commenter_text_add">
                      <textarea rows="1"></textarea>
                      <button class="btn btn-primary">Send</button>
                    </div>
                    <div>
                      <i class="far fa-paper-plane"></i>
                      <i class="fa fa-thumbs-up"></i>
                    </div>
                    <div class="clearfix"></div>
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
export default {
  name: "PostCard",
};
</script>
<style scoped>
.post_view_section {
  width: 100%;
  margin-bottom: 20px;
  background: #fff;
  padding: 25px;
  padding-bottom: 10px;
  position: relative;
  border: #e2e2e2 solid 1px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 12px;
}
.normal_post_wrap {
  width: 100%;
  margin-bottom: 0px !important;
  background: #fff;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: flex-start;
  justify-content: flex-start;
}
.view_post_user_pic {
  width: 40px;
  height: 40px;
  margin-right: 15px;
}
.view_post_user_pic span {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50% !important;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
.view_post_user_pic span img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50% !important;
}
.post_name_time_setting {
  width: calc(100% - 55px);
  width: -moz-calc(100% - 55px);
  width: -webkit-calc(100% - 55px);
  position: relative;
  z-index: 2;
  padding-bottom: 10px;
  display: flex;
  flex-wrap: nowrap;
}
.post_view_section .post_name_time_setting .post_name_time {
  width: calc(100% - 20px);
  width: -moz-calc(100% - 20px);
  width: -webkit-calc(100% - 20px);
  padding-top: 3px;
}
.post_view_section .post_name_time_setting .post_name_time a {
  color: #003460;
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  display: block;
  font-weight: bold;
}
.post_view_section .post_name_time_setting .post_name_time a label {
  display: block;
  color: #003460;
  font-size: 12px;
  line-height: 20px;
  font-weight: normal;
  cursor: pointer;
  margin-top: 5px;
}
.post_view_section .post_view_area {
  width: 100%;
}
.post_view_section .post_view_area .post_view_details {
  width: 100%;
  background: #fff;
}
.post_view_section .post_view_area .post_view_details .post_area {
  width: 100%;
  margin-bottom: 20px;
}
.post_view_section .post_view_area .post_view_details .post_area p {
  padding: 10px !important;
  margin-bottom: 0px;
}
.post_view_section .post_view_area .post_view_details .post_area label {
    color: #B9B9B9;
    font-size: 12px;
    margin-right: 10px;
    font-weight: normal;
}
.post_view_section .post_view_area .comments_view_details_section {
    width: 100%;
}
.post_view_section .post_view_area .comments_view_details_section .comments_view_outer {
    width: 100%;
}
.post_view_section .post_view_area .comments_view_details_section .comments_view_outer .commenter_text_add_inner {
    width: 100%;
    padding-bottom: 20px;
}
.post_view_section .post_view_area .comments_view_details_section .comments_view_outer .commenter_text_add_inner .commenter_text_add {
    width: calc(100% - 90px);
}
.post_view_section .post_view_area .comments_view_details_section .comments_view_outer .commenter_text_add_inner .commenter_text_add textarea {
    width: 100%;
    height: 36px;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    border-radius: 20px;
    background: #F5F5F5;
    padding: 10px;
    line-height: 18px;
    color: #666;
    overflow: hidden;
    padding-right: 50px;
    font-size: 14px;
}

</style>