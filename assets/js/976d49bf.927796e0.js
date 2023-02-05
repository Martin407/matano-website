"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[3082],{9992:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=a(7462),o=(a(7294),a(3905)),i=a(1839);const s={title:"S3 POST Policy - The hidden S3 feature you haven't heard of",keywords:["s3","aws","post policy"],authors:["samrose"],tags:["engineering"],description:"A look at S3 POST Policies and how to use them to create secure, short lived client object upload sessions."},l=void 0,r={permalink:"/blog-archive/2022/02/14/s3-post-policy",source:"@site/blog-archive/2022-02-14-s3-post-policy/index.mdx",title:"S3 POST Policy - The hidden S3 feature you haven't heard of",description:"A look at S3 POST Policies and how to use them to create secure, short lived client object upload sessions.",date:"2022-02-14T00:00:00.000Z",formattedDate:"February 14, 2022",tags:[{label:"engineering",permalink:"/blog-archive/tags/engineering"}],readingTime:7.28,hasTruncateMarker:!0,authors:[{name:"Samrose Ahmed",url:"https://www.matano.dev",email:"samrose@matano.dev",imageURL:"https://github.com/Samrose-Ahmed.png",key:"samrose"}],frontMatter:{title:"S3 POST Policy - The hidden S3 feature you haven't heard of",keywords:["s3","aws","post policy"],authors:["samrose"],tags:["engineering"],description:"A look at S3 POST Policies and how to use them to create secure, short lived client object upload sessions."},prevItem:{title:"How we build a fully regional cloud architecture on AWS",permalink:"/blog-archive/2022/03/09/regional-cloud-architecture"}},u={authorsImageUrls:[void 0]},c=[{value:"Presigned URLs",id:"presigned-urls",level:2},{value:"A new API using temporary credentials",id:"a-new-api-using-temporary-credentials",level:2},{value:"Enter POST Policy",id:"enter-post-policy",level:2},{value:"What does a POST policy look like?",id:"what-does-a-post-policy-look-like",level:4},{value:"Signing the policy",id:"signing-the-policy",level:4},{value:"Letting our clients perform POST uploads",id:"letting-our-clients-perform-post-uploads",level:4},{value:"Conclusion",id:"conclusion",level:2},{value:"Usecases",id:"usecases",level:3},{value:"Browser based uploads",id:"browser-based-uploads",level:4},{value:"Short lived low-latency upload sessions",id:"short-lived-low-latency-upload-sessions",level:4},{value:"Guidance",id:"guidance",level:3}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Say you're building an application and you need to let your users upload files to S3. How would you go about it?"),(0,o.kt)("p",null,"Particularly, imagine our clients are uploading a lot of files of different sizes, and are sensitive to latency."),(0,o.kt)("p",null,"Let's walk through a journey of AWS APIs, and explore a little known feature of S3 called ",(0,o.kt)("em",{parentName:"p"},"POST Policies"),"."),(0,o.kt)("h2",{id:"presigned-urls"},"Presigned URLs"),(0,o.kt)("p",null,"Your immediate instinct may be to use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html"},"S3 presigned URLs"),".\nPresigned URLs let you create a URL that you can share and allow a user to download or upload to an S3 bucket. You create the presigned\nURL server side using IAM credentials that have the valid S3 permissions and then share the URL to allow user actions. Clients simply use HTTP clients to connect to the URL.\nYou can set an expiry time to any date time to ensure the access is short lived and you can also attach an IAM policy to the presigned URL to limit the permissions the client has."),(0,o.kt)("p",null,"All in all, presigned URLs are pretty powerful and sound like a great choice for allowing credential-less S3 actions. They have one major limitation, however.\n",(0,o.kt)("em",{parentName:"p"},"S3 presigned upload urls require you to know the Content length before hand.")," Because of the way presigned URLs work, using AWS4 Signatures, the Content-Length\nis a required component when generating the presigned URL. This means we can't return one presigned URL and allow our clients to upload objects of variable size while\nit is not expired."),(0,o.kt)("p",null,"As a workaround, we can have the client request a presigned URL every time they want to perform an upload. This is not necessarily a big deal, and may\nbe perfectly suitable for many scenarios."),(0,o.kt)(i.G,{chart:"%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '13px', 'fontFamily': 'Inter'}}}%%\n  sequenceDiagram\n    loop Each upload\n      Client->>Server: Request presigned URL\n      Server->>Client: Presigned  URL\n      Client->>S3: Upload object\n    end",mdxType:"Mermaid"}),(0,o.kt)("p",null,"However, this results in an additional call for every upload and may not be desirable. For example, say we want our clients to have a short lived\nsession where they can upload a large number of objects, and latency is important."),(0,o.kt)("h2",{id:"a-new-api-using-temporary-credentials"},"A new API using temporary credentials"),(0,o.kt)("p",null,"Presigned URLs don't seem to work well for our usecase, so let's try a new approach. AWS IAM offers APIs to\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html"},"request temporary security credentials"),". There's\na few different APIs, but let's see if we can use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html"},"AssumeRole")," to return temporary\ncredentials to our client."),(0,o.kt)("p",null,"As an approach, we can call STS AssumeRole server side and return temporary IAM credentials to our client. We can use IAM ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session"},"session policies"),"\nto limit the S3 permissions the client has access to. We can also use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html#API_AssumeRole_RequestParameters"},"DurationSeconds"),"\nparameter to limit the validity of the credentials, but only up to a minimum of 15 minutes."),(0,o.kt)("p",null,"Our clients would then use the credentials and upload files using the AWS SDK. If we're offering this as a part of our API, we'd likely want to write a language native client\nthat wraps the AWS SDK and takes care of refereshing the credentials."),(0,o.kt)("p",null,"Security-wise, you may feel icky having to return credentials using your API, but the approach is generally sound as long as the credentials are short lived and you are\ngiving access to authenticated callers with narrow permissions."),(0,o.kt)("p",null,"This approach works, but besides having to implement this API, comes with several downsides:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dealing with unsigned credentials."),(0,o.kt)("li",{parentName:"ul"},"Our client needs to depend on heavyweight AWS SDKs, rather than a simple HTTP Client."),(0,o.kt)("li",{parentName:"ul"},"We can't control the size of the object our client uploads. This can be a concern with untrusted or semi-trusted clients, who could upload very\nlarge files to our S3 bucket.")),(0,o.kt)("h2",{id:"enter-post-policy"},"Enter POST Policy"),(0,o.kt)("p",null,"We're dissatisfied with our previous approach. Let's explore a lesser known Amazon S3 feature: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-HTTPPOSTConstructPolicy.html"},"POST Policy"),".\nYou might be thinking, ",(0,o.kt)("em",{parentName:"p"},'"POST?, isn\'t it S3 PUT object?"'),", and you're right, but Amazon actually introduced a POST API for uploading S3 objects to enable browser based S3 uploads."),(0,o.kt)("p",null,"As a note, you'll generally hear of POST Policy in the context of browser based uploads, but there's nothing inherent preventing us from using it in any environment."),(0,o.kt)("p",null,"A POST policy is essentially a JSON document that you create, sign, and return to your clients to specify what conditions are required for a successful POST object upload."),(0,o.kt)("h4",{id:"what-does-a-post-policy-look-like"},"What does a POST policy look like?"),(0,o.kt)("p",null,"POST policies are fairly powerful: you can specify the exact date time the policy expires and include conditions on properties like the ",(0,o.kt)("em",{parentName:"p"},"ACL"),", ",(0,o.kt)("em",{parentName:"p"},"Bucket"),", ",(0,o.kt)("em",{parentName:"p"},"Key prefix"),",\nand ",(0,o.kt)("em",{parentName:"p"},"Content length range"),' (minimum and maximum). You can also use operators like "starts_with" in addition to exact matches to add dynamic logic to your policy.'),(0,o.kt)("p",null,"Let's take a look at an example POST policy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "expiration": "2022-02-14T13:08:46.864Z",\n  "conditions": [\n    { "acl": "bucket-owner-full-control" },\n    { "bucket": "my-bucket" },\n    ["starts-with", "$key", "stuff/clientId"],\n    ["content-length-range", 1048576, 10485760]\n  ]\n}\n')),(0,o.kt)("p",null,"The policy results in the following conditions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The policy expires on Mon Feb 14 2022 13:08:46 UTC. After this time, any client using the policy to perform a POST upload will get a 403 error."),(0,o.kt)("li",{parentName:"ul"},"The ACL on the object must be ",(0,o.kt)("inlineCode",{parentName:"li"},"Bucket owner full control"),", which ensures we, as the bucket owner, have full control of uploaded objects."),(0,o.kt)("li",{parentName:"ul"},"We specify a specific bucket by name (",(0,o.kt)("inlineCode",{parentName:"li"},"my-bucket"),") to allow uploads to."),(0,o.kt)("li",{parentName:"ul"},"The S3 key of the uploaded object must have a specific prefix. Here, we use it ensure our client only has permission to upload under their prefix by specifying their client ID as the key prefix."),(0,o.kt)("li",{parentName:"ul"},"The uploaded object must be between 1MB and 10MB in size.")),(0,o.kt)("h4",{id:"signing-the-policy"},"Signing the policy"),(0,o.kt)("p",null,"After forming a POST policy, we have to ",(0,o.kt)("em",{parentName:"p"},"sign")," the policy using valid IAM credentials (with the requisite permissions), similar to how we sign presigned URLs. You can view the\ncomplete procedure on calculating the signature ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-UsingHTTPPOST.html#sigv4-post-signature-calc"},"here")," but it\nessentially involves Base64 encoding the policy and signing it using AWS SigV4. Unfortunately, unlike presigned URLs, the AWS SDKs don't provide helper methods\nto create the POST Policy. You can write it yourself or consult the few examples and community libraries out there. If you're using Java/JVM, check out\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/minio/minio-java/blob/master/api/src/main/java/io/minio/PostPolicy.java"},"Minio's implementation")," as a well maintained reference."),(0,o.kt)("h4",{id:"letting-our-clients-perform-post-uploads"},"Letting our clients perform POST uploads"),(0,o.kt)("p",null,"Once we've created the POST policy, our client's can use the POST policy to perform POST S3 uploads. S3 POST uploads are multipart form data requests to the S3 Bucket URL\n(e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"https://examplebucket.s3-us-west-2.amazonaws.com/"),") containing the key's specified in the POST policy. As a code example in Python:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from uuid import uuid\nimport requests\n\n# Add an endpoint for the client to request a POST Policy\npost_policy_form_data = requests.get("/postPolicyFormData")\npost_policy_form_data = {\n  "x-amz-date": "20220213T233352Z",\n  "x-amz-signature": "efa9bbc<...>",\n  "acl": "bucket-owner-full-control",\n  "x-amz-security-token": "<...>",\n  "x-amz-algorithm": "AWS4-HMAC-SHA256",\n  "x-amz-credential": "ASIA<..>.",\n  "policy": "eyJleHBpcmF...<base64 encoded policy>",\n  "Content-Type": "application/json"\n}\n\nfilename = str(uuid4()) + ".json"\nkey = os.path.join("client_id", filename)\ncontent = "file_content"\nmultipart_form_data = { **post_policy_form_data, "key": key, "file": (filename, content) }\n\nupload_url = "https://examplebucket.s3-us-west-2.amazonaws.com"\nres = requests.post(upload_url, files=multipart_form_data)\n')),(0,o.kt)("p",null,"POST policies satisfy all of our requirements."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We are using signed policies without raw credentials."),(0,o.kt)("li",{parentName:"ul"},"Our clients can make HTTP requests without the AWS SDK."),(0,o.kt)("li",{parentName:"ul"},"We can granularly control the expiration, permissions, and object properties,"),(0,o.kt)("li",{parentName:"ul"},"Our clients can upload objects as long as the POST policy is not expired without needing to make additional requests.")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"We took a short look at the S3 object upload landscape, and discovered a powerful feature called POST Policies."),(0,o.kt)("h3",{id:"usecases"},"Usecases"),(0,o.kt)("p",null,"Lets take a look at some usecases that POST policies unlock:"),(0,o.kt)("h4",{id:"browser-based-uploads"},"Browser based uploads"),(0,o.kt)("p",null,"Particularly for large sized files, POST policies provide a convenient way to enable your client's to upload files client side, without needing to go through a server proxy.\nThis can be convenient if you're using API Gateway or Lambda which have content size limits. Additionally, this can give your client better upload speed."),(0,o.kt)("h4",{id:"short-lived-low-latency-upload-sessions"},"Short lived low-latency upload sessions"),(0,o.kt)("p",null,"As we discussed, we can use POST policies to let our clients maintain a short lived, controlled session with specific permissions where they can upload many objects\nof variable size, without any additional latency besides S3 latency."),(0,o.kt)("h3",{id:"guidance"},"Guidance"),(0,o.kt)("p",null,"As a takeway, if you are looking to incorporate S3 object upload from your clients in your application, follow the general guidance:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Prefer presigned URLs. They're simpler, are already supported in the AWS SDKs and are well documented."),(0,o.kt)("li",{parentName:"ul"},"Use POST policies otherwise. As we discussed, if latency is important, or you want form based browser uploads."),(0,o.kt)("li",{parentName:"ul"},"Don't use the second approach we discussed (using ",(0,o.kt)("inlineCode",{parentName:"li"},"AssumeRole"),"). You can generally achieve the equivalent using a POST policy.")),(0,o.kt)("p",null,"Are you using POST policies, or do you know of an interesting usecase they enable? Feel free to reply."))}d.isMDXComponent=!0}}]);