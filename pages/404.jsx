// import Link from "next/link";
import Head from "next/head";
// import styled from "styled-components";
// import { useEffect } from "react";
// import useRouter from "next/router";

// const NotFound = styled.section`
//   text-align: center;
// `;

export default function PageNotFound() {
  // const router = useRouter();

  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push("/");
  //   }, 3000);
  // }, []);

  return (
    <div>
      <Head>
        <title>Yik | 404</title>
      </Head>
      <div>404</div>
      {/* <NotFound>
        <h1>Oooooooops</h1>
        <h2>That page cannot be found</h2>
        <p>
          You will be redirected back to the <Link href="/">homepage</Link>
        </p>
      </NotFound> */}
    </div>
  );
}
