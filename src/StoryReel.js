import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story
        image='https://scontent.fyvr1-1.fna.fbcdn.net/v/t1.0-9/11231801_946409395381132_4057918326895024837_n.jpg?_nc_cat=107&ccb=3&_nc_sid=8bfeb9&_nc_ohc=CUnfZqZXltQAX_mNTUE&_nc_ht=scontent.fyvr1-1.fna&oh=b225ca87b2ae4c5058dddb6f97872a3f&oe=60521369'
        profileSrc='https://scontent.fyvr1-1.fna.fbcdn.net/v/t1.0-9/12065942_1009694369052634_671776105877551454_n.jpg?_nc_cat=109&ccb=3&_nc_sid=09cbfe&_nc_ohc=f5ueeVQ0vtYAX9WA0y9&_nc_ht=scontent.fyvr1-1.fna&oh=233965fe1d16048819e8feecf1be376b&oe=60540CAD'
        title='Jack Lin'
      />
      <Story
        image='https://external.fyvr1-1.fna.fbcdn.net/safe_image.php?d=AQHkmMJJPMLJ1FHr&url=https%3A%2F%2Fcdn.fbsbx.com%2Fv%2Ft65.23080-21%2F100889470_193185088591500_1137840335408133978_n.jpg%3F_nc_cat%3D102%26ccb%3D3%26_nc_sid%3D1b7556%26_nc_ohc%3DVEeF_Kq5HicAX9rczpP%26_nc_ht%3Dcdn.fbsbx.com%26oh%3Df1e4e8b25a950291b1a58819d0c0f2fd%26oe%3D602E9830&_nc_cb=1&_nc_hash=AQHytbm3WRP06IQh'
        profileSrc='https://external.fyvr1-1.fna.fbcdn.net/safe_image.php?d=AQHkmMJJPMLJ1FHr&url=https%3A%2F%2Fcdn.fbsbx.com%2Fv%2Ft65.23080-21%2F100889470_193185088591500_1137840335408133978_n.jpg%3F_nc_cat%3D102%26ccb%3D3%26_nc_sid%3D1b7556%26_nc_ohc%3DVEeF_Kq5HicAX9rczpP%26_nc_ht%3Dcdn.fbsbx.com%26oh%3Df1e4e8b25a950291b1a58819d0c0f2fd%26oe%3D602E9830&_nc_cb=1&_nc_hash=AQHytbm3WRP06IQh'
        title='Elon Musk'
      />
      <Story
        image='https://scontent.fyvr1-1.fna.fbcdn.net/v/t31.0-8/14195212_1205887539469019_7859910814621200304_o.jpg?_nc_cat=109&ccb=3&_nc_sid=e3f864&_nc_ohc=ieDRfHew40UAX-TC8bq&_nc_ht=scontent.fyvr1-1.fna&oh=5c8667e3d947a1750a86a5b53d856de4&oe=60544BB4'
        profileSrc='https://scontent.fyvr1-1.fna.fbcdn.net/v/t1.0-9/1798717_824010997656677_1003455886952412230_n.jpg?_nc_cat=102&ccb=3&_nc_sid=09cbfe&_nc_ohc=H2aYGCF8Vb4AX-WvDeb&_nc_ht=scontent.fyvr1-1.fna&oh=1710da2a55ca8d84f6275be0c450d9db&oe=605436C7'
        title='Q&A with Mark'
      />

      <Story
        image='https://miro.medium.com/max/3840/1*yjH3SiDaVWtpBX0g_2q68g.png'
        profileSrc='https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png'
        title='React'
      />
      <Story
        image='https://vuejsdevelopers.com/images/posts/generic_vue_header.jpg'
        profileSrc='https://i1.wp.com/storage.googleapis.com/blog-images-backup/1*wFL3csJ96lQpY0IVT9SE3w.jpeg?ssl=1'
        title='Vue'
      />
    </div>
  );
}

export default StoryReel;
