<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="upload_post_area">
          <div class="upload_post_user_pic_name_text_outer">
            <div class="upload_post_user_pic">
              <span><img src="http://localhost/pitch_images/avatars/30/IP0LAyy69JwNKeIrWlL5KkJct1MzB9xG6JeUNMK0.jpeg"/></span>
            </div>
            <div class="upload_name_text">
              <h2>user 1</h2>
              <textarea id="post_textarea" placeholder="Post something encouraging …"></textarea>
            </div>
          </div>
          <div class="upload_post_btn">
            <!-- <ul>
              <li id="upload-file-dialog" class="dz-clickable">
                <span class="pdf_upload_bg"> Attach files </span>
              </li>
              <li id="upload-image-video-dialog" class="dz-clickable">
                <span class="pic_video_upload_bg"> Image/Video </span>
              </li>
            </ul> -->
            <button type="submit" class="btn btn-blue">Post now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'createPost'
}
</script>
<style scoped>
.upload_post_area {
    width: 100%;
    margin-bottom: 20px;
    background: #fff;
    position: relative;
    border: #E2E2E2 solid 1px;
    border-radius: 12px;
}
.upload_post_area .upload_post_user_pic_name_text_outer {
    width: 100%;
    display: flex;
    align-content: center;
    align-items: flex-start;
    justify-content: space-between;
    padding: 30px 20px;
    border-bottom: #E2E2E2 solid 1px;
    padding-bottom: 10px;
}
.upload_post_area .upload_post_btn {
    padding: 10px 20px;
    justify-content: flex-end;
}
.upload_post_area .upload_post_user_pic_name_text_outer .upload_post_user_pic {
    width: 40px;
    height: 40px;
    margin-right: 15px;
}
.upload_post_area .upload_post_user_pic_name_text_outer .upload_post_user_pic span {
    width: 100%;
    height: 100%;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}
.upload_post_area .upload_post_user_pic_name_text_outer .upload_post_user_pic span img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}
.upload_post_area .upload_post_user_pic_name_text_outer .upload_name_text {
    width: calc(100% - 55px);
    width: -moz-calc(100% - 55px);
    width: -webkit-calc(100% - 55px);
}
.upload_post_area .upload_post_user_pic_name_text_outer .upload_name_text h2 {
    color: #003460;
    font-size: 16px;
    font-weight: 600;
}
.upload_post_area .upload_post_user_pic_name_text_outer .upload_name_text textarea {
    width: 100%;
    line-height: 20px;
    color: #6d6d6d;
    font-size: 14px;
    font-weight: normal;
    padding-top: 10px;
    padding-left: 2px;
    padding-right: 2px;
    padding-bottom: 2px;
    border: 0;
    background: transparent;
    height: auto;
    border-radius: 0;
}
.upload_post_area .upload_post_btn ul {
    margin: 0;
    padding: 4px 5px 4px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: space-between;
}
.upload_post_area .upload_post_btn ul li {
    margin-left: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    height: 38px;
    align-content: center;
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    padding-left: 10px;
    padding-right: 10px;
    background: #F5F5F5;
}
.upload_post_area .upload_post_btn ul li span {
    color: #000;
    font-size: 12px;
    display: inline-block;
}
</style>