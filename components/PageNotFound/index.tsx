import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/common/header";
import { Flex } from "@/styles/CommonStyles";
import {
  PageNotFoundImage,
  PageNotFoundText,
  PageNotFoundWrapper,
} from "./PageNotFoundStyles";
import Image from "next/image";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <>
      <Header />
      <PageNotFoundWrapper>
        <PageNotFoundImage>
          <Image
            src="https://assets.stablemoney.in/web-frontend/page-not-found.png"
            alt="page-not-found-image"
            height={300}
            width={300}
            unoptimized
          />
        </PageNotFoundImage>
        <PageNotFoundText>
          Seems like the page you were looking for cannot be found. Don&apos;t
          worry.
          <br />
          Let&apos;s resume your financial journey with Stable Money...
        </PageNotFoundText>
        <Flex>
          <Button>
            <Link href="/" style={{ fontSize: "20px !important" }}>
              Go to Homepage
            </Link>
          </Button>
        </Flex>
      </PageNotFoundWrapper>
    </>
  );
};

export default PageNotFound;
