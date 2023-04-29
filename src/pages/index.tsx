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
        {Object.keys(userdata).map((data) => {
          return(
            <div>
              <label htmlFor={data}>{data} : </label>
              <input type="text" id={data} name={data} />
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
