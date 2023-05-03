//TODO: birthdayの項目をカレンダー選択にする


import { useState } from "react";


export default function Home() {
  const [userdata, setUserData] = useState({
    name: "", nickname: "", birthday: "", character: "", charmpoint: "", hobby: "", skill: ""
  });

  return (
    <div>
      <h1>プロフ帳ジェネレーター</h1>
      <p>プロフ帳を作成します！</p>
      <form action="/generate" method="get">
        <div>
          <label htmlFor="name">なまえ : </label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="nickname">あだな : </label>
          <input type="text" id="nickname" name="nickname" />
        </div>
        <div>
          <label htmlFor="birthday">たんじょうび : </label>
          <input type="date" id="birthday" name="birthday" />
        </div>
        <div>
          <label htmlFor="character">せいかく : </label>
          <input type="text" id="character" name="character" />
        </div>
        <div>
          <label htmlFor="charmpoint">チャームポイント : </label>
          <input type="text" id="charmpoint" name="charmpoint" />
        </div>
        <div>
          <label htmlFor="hobby">しゅみ : </label>
          <input type="text" id="hobby" name="hobby" />
        </div>
        <div>
          <label htmlFor="skill">とくぎ : </label>
          <input type="text" id="skill" name="skill" />
        </div>
        <button type="submit">けってい</button>
      </form>
    </div>
  );
}
