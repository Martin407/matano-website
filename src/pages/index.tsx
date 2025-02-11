import React, { useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useColorMode } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import coverPng from "@site/src/assets/matano-cover-3x.png";
import diagramPng from "@site/src/assets/diagram.png";
import diagramWebp from "@site/src/assets/diagram.webp";
import cover1 from "@site/src/assets/main1.png";
import cover2 from "@site/src/assets/main2.png";
import cover3 from "@site/src/assets/main3.png";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

const Waitlist = (props: any) => {
  let baseCls = "flex flex-col xl:flex-row gap-4 xl:gap-8 py-2";
  if (props.centered) {
    baseCls = clsx(baseCls, "items-center text-center");
  }
  return (
    <div {...props} className={clsx(props.className, "mt-8 flex flex-col")}>
      <div className={baseCls}>
        <div>
          <div className="text-lg text-slate-700 font-medium">
            We're building a modern cloud native SIEM.
          </div>
          <div className="text-2xl mt-1">
            Join the waitlist for <strong className="text-blue-600">Matano Cloud.</strong>{" "}
          </div>
        </div>
        <SubscribeForm />
      </div>
    </div>
  );
};
const mcUrl =
  "https://dev.us13.list-manage.com/subscribe/post?u=9ae6754442e0e3ac2d76a9f10&amp;id=41bedb4068&amp;f_id=00248de2f0";
const SubscribeForm = () => {
  const { loading, error, success, message, handleSubmit } = useMailChimpForm(mcUrl);
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
  });

  let postMessage = "";
  if (loading) {
    postMessage = "Submitting...";
  } else if (error) {
    postMessage = "Error subscribing to waitlist, please try again.";
  } else if (success) {
    postMessage = "Thanks for joining the waitlist!";
  }
  if (loading || error || success) {
    return <div className="lg:ml-4 text-lg">{postMessage}</div>;
  }
  return (
    <div className="w-full flex-1 md:p-1 flex flex-col md:flex-row items-center gap-2">
      <input
        id="EMAIL"
        type="email"
        value={fields.EMAIL}
        onChange={handleFieldChange}
        placeholder="Enter your email"
        className="w-full flex-1 rounded-md border-0 bg-gray-200 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 flex-1"
      />
      <a
        type="submit"
        className="w-full my-btn text-white hover:text-white bg-blue-500 border-blue-500 hover:bg-blue-600 md:w-auto"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit(fields);
        }}
      >
        Join the Waitlist
      </a>
    </div>
  );
};

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero-bg flex-1 flex flex-col px-12 sm:px-24 pt-24 pb-20 sm:pt-32 sm:pb-48 shadow-md">
      <div className="max-w-5xl">
        <h1
          className="pt-0 subpixel-antialiased mx-auto font-display sm:text-6xl text-4xl font-[Inter,sans-serif] font-semibold tracking-tight text-slate-900"
          style={{
            lineHeight: 1.1,
          }}
        >
          The Open Source
          <br />
          <span className="" style={{ color: "var(--ifm-color-primary-dark)" }}>
            Security Lake Platform
          </span>{" "}
          for AWS
        </h1>
        <p className="font-sans font-normal text-lg sm:text-2xl sm:leading-9">
          {/* Unify your security analytics in a complete platform built around a security data lake{" "} */}
          Serverless, high scale, low cost, zero-ops security log analytics{" "}
          <span className="underline decoration-pink-500">in your AWS account</span>.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-4 mt-6">
          <a
            className="my-btn text-white hover:text-white text-lg bg-blue-600 border-blue-600 hover:bg-blue-700 w-full mb-2 sm:w-auto"
            href="/docs"
          >
            Get started
          </a>
          <a
            className="my-btn border-2 text-blue-600 hover:text-blue-600 text-lg border-blue-600 hover:bg-blue-100 w-full mb-2 sm:w-auto tw-border-solid"
            href="https://github.com/matanolabs/matano"
            target="_blank"
            rel="noopener"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
            View GitHub
          </a>
        </div>
      </div>
      <Waitlist className="w-full md:w-5/6" />
    </header>
  );
}

const Usecases = () => {
  return (
    <section>
      <h2 className="!text-4xl font-[Inter] text-center py-8 px-8">Usecases</h2>
    </section>
  );
};

export function CtaFooter() {
  return (
    <div className="bg-blue-50 oil123 rounded-2xl shadow">
      <div className="max-w-7xl mx-auto py-12 px-12 lg:py-24 lg:flex lg:flex-col lg:items-center lg:justify-between">
        <h2 className="!text-3xl text-center font-bold tracking-tight text-gray-900 sm:!text-4xl lg:!text-5xl sm:tracking-tight">
          <span className="block">
            Start building on the <span className="text-blue-600 underline">security lake platform</span>
            {/* High scale. Low cost. Zero ops. <span className="text-blue-600 underline">Pick three.</span> */}
          </span>
        </h2>
        <span className="block text-center text-lg sm:text-xl md:text-2xl sm:mt-2">
          Unlock all your security data today.
        </span>
        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 mt-8">
          <a
            className="my-btn text-center text-white hover:text-white text-md sm:text-lg bg-blue-600 border-blue-600 hover:bg-blue-700 w-full mb-2 md:w-auto"
            href="/docs"
          >
            Read the docs
          </a>
          <a
            className="my-btn border-2 text-center text-blue-600 hover:text-blue-600 text-md sm:text-lg border-blue-600 bg-blue-100 hover:bg-blue-200 w-full mb-2 md:w-auto tw-border-solid"
            href="https://github.com/matanolabs/matano"
            target="_blank"
            rel="noopener"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
            Visit us on GitHub
          </a>
          <a
            className="my-btn text-center text-white hover:text-white text-md sm:text-lg bg-blue-600 border-blue-600 hover:bg-blue-700 w-full mb-2 md:w-auto"
            href="https://discord.gg/YSYfHMbfZQ"
            target="_blank"
            rel="noopener"
          >
            Join the community
          </a>
        </div>
        <Waitlist centered className="w-full md:w-5/6 mt-12 lg:mt-16 mx-auto" />
      </div>
    </div>
  );
}

function LightTheme({ children }: any) {
  const { setColorMode } = useColorMode();
  useEffect(() => {
    setColorMode("light");
  }, []);
  return <>{children}</>;
}

export default function Home(): JSX.Element {
  return (
    <Layout description="Serverless, high scale, low cost SIEM alternative in your AWS account. Ingest petabytes of security data and write Python detections as code.">
      <LightTheme>
        <Head>
          <html className="mtn-homepage" />
          <title>Matano | Open source security lake platform for AWS</title>
          <meta property="og:title" content="Matano | Open source security lake platform for AWS" />
          <meta property="og:image" content={coverPng} />
        </Head>
        <div className="flex-1 flex">
          <HomepageHeader />
        </div>
        <main className="flex flex-col items-center pb-16 bg-slate-100">
          <div className="rounded-xl sm:rounded-2xl mx-4 sm:mx-16 shadow-xl sm:shadow-2xl !shadow-blue-400 -mt-8 sm:-mt-24 mb-12 md:mb-20">
            <picture>
              <source type="image/webp" srcSet={diagramWebp} />
              <source type="image/png" srcSet={diagramPng} />
              <img
                alt="Architecture diagram showing components of Matano"
                className="rounded-xl sm:rounded-2xl"
                src={diagramPng}
              />
            </picture>
          </div>

          <div className="flex flex-col gap-8 md:gap-y-32 mt-2 md:mt-12 mb-8 md:mb-24">
            <HomepageSection
              mainHeader="Matano lets you own your security data"
              subHeader="And be free from vendor lock-in"
              img={
                <img
                  src={cover1}
                  alt="Query data in Matano from query engines like Snowflake, Athena, BigQuery, Spark, and Trino"
                />
              }
              isImgFirst
            >
              <p>
                Cybersecurity vendors lock your data in proprietary formats that make it difficult to use
                outside of their products.
              </p>

              <p>
                Matano takes a different approach by building around an open security data lake that you own.
              </p>

              <p>
                With Matano, all your data is stored in open format Apache Iceberg tables that can can be
                directly queried from different tools (Amazon Athena, Snowflake, Spark etc.) without having to
                copy any data.
              </p>
            </HomepageSection>

            <HomepageSection
              mainHeader="Write advanced detections as code"
              subHeader="Correlate and alert on threats in realtime."
              img={
                <img
                  className="rounded-xl"
                  src={cover2}
                  alt="An example Matano Python detection on Zeek data checking for a Windows service changed remotely"
                />
              }
            >
              <p>
                Matano gives you the complete flexibility of Python code to build high-fidelity detections
                that capture threats in realtime.
              </p>

              <p>
                Build stateful alerts to assess entity-risk over time or combine signals using scheduled SQL
                detections.
              </p>

              <p>
                Alerting rules in Matano are designed to be tested, reviewed, and incrementally hardened,
                resulting in a drastic reduction of false-positives compared to traditional SIEM.
              </p>
            </HomepageSection>

            <HomepageSection
              mainHeader="Enrich, transform, normalize"
              subHeader="From unstructured logs to a powerful security data lake"
              img={
                <img
                  className="rounded-xl"
                  src={cover3}
                  alt="An example Matano log transformation script normalizing Cloudtrail logs using Vector Remap language"
                />
              }
            >
              <p>
                Matano includes a serverless log transformation pipeline allowing for Vector Remap Language
                (VRL) scripting to easily normalize & enrich raw security logs without maintaining any servers
                (goodbye Logstash).
              </p>
              <p>
                Matano provides dozens of managed log sources to easily ingest security logs from popular
                cloud, host, and SaaS tools using pre-built parsers and integrations.
              </p>
              <p>
                With native support for the Elastic Common Schema, Matano enables enhanced correlation and
                bulk search for indicators across your security data lake.
              </p>
            </HomepageSection>

            <HomepageSection
              mainHeader="Built for petabyte scale"
              subHeader="Eliminate gaps in your security program and analyze all your
          data."
            >
              <p className="md:flex-1">
                With Matano, you can confidently analyze and store all your data without worrying about a cost
                prohibitive bill.
              </p>

              <p className="md:flex-1">
                Matano's security data lake architecture uses the latest technologies in Big Data from Apache
                Arrow and Iceberg to Rust, and is built on foundational, predictable cloud services like S3,
                Lambda, and SQS.
              </p>
            </HomepageSection>
          </div>

          <HomepageFeatures />

          <section className="pt-10 md:pt-20 px-6 md:px-12" style={{ width: "100%" }}>
            <CtaFooter />
          </section>
        </main>
      </LightTheme>
    </Layout>
  );
}

function HomepageSection({ mainHeader, subHeader, children, img, isImgFirst }: any) {
  const flexClasses = isImgFirst ? "flex-col-reverse lg:flex-row-reverse" : "flex-col lg:flex-row";
  const contentClasses = clsx(flexClasses, "flex items-start gap-8");
  return (
    <section className="">
      <div className="mx-2 sm:mx-4 md:mx-12 flex flex-col">
        <div className="mx-5 md:mx-12">
          <div className="mb-4 md:mb-8">
            <h2 className="!text-3xl md:!text-5xl pt-8 font-[Inter]">{mainHeader}</h2>
            <h3 className="!text-xl md:!text-3xl font-[Inter]">{subHeader}</h3>
          </div>

          <div className={contentClasses}>
            <div className="lg:flex flex-1 lg:flex-col text-xl md:text-xl">{children}</div>
            {img && (
              <div className="flex flex-1 items-center rounded-xl shadow-2xl shadow-sky-100">{img}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
