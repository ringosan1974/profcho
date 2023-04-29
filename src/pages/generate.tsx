import { useRouter } from "next/router";

export default function Gen() {
    const router = useRouter();
    const params = router.query;
    /*
    * 画像生成処理をはさむ
    */
    console.log(params);
    return(
        <h1>generate page.</h1>
    )
}