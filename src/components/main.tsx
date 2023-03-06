import { signIn, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export type headArgs = {
    title?: string
    desc?: string
    image?: string
    robots?: string
    webType?: string
}

export const Deaconn: React.FC<{ headArgs?: headArgs, content: JSX.Element }> = ({ headArgs={ title: "Deaconn", desc: "Creating nextgen services and products under technology.", robots: "index, follow", webType: "website" }, content }) => {
    // Retrieve URLs.
    let base_url;
    let full_url;

    if (typeof window !== "undefined") {
        base_url = window.location.protocol + "//" + window.location.host;
        full_url = base_url +  window.location.pathname;
    }

    return (
        <>
            <MetaInfo   
                headArgs={headArgs}
                full_url={full_url}
                base_url={base_url}
            />
            <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-gray-900">
                <Header />
                {content}
                <Footer />
            </main>
        </>
    );
}

export const MetaInfo: React.FC<{ headArgs: headArgs, full_url?: string, base_url?: string }> = ({ headArgs, full_url, base_url }) => {
    return (
        <Head>
            <link rel="canonical" href={full_url} key="headCanonical" />

            {headArgs.title && (
                <>
                    <title key="headTitle">{headArgs.title}</title>
                    <meta property="twitter:title" content={headArgs.title} key="headTwitterTitle" />
                    <meta property="og:title" content={headArgs.title} key="headOGTitle" />
                </>
            )}
            {headArgs.desc && (
                <>
                    <meta name="description" content={headArgs.desc} key="headDesc" />
                    <meta property="twitter:description" content={headArgs.desc} key="headTwitterDesc" />
                    <meta property="og:description" content={headArgs.desc} key="headOGDesc" />
                </>
            )}
            {headArgs.image && (
                <>
                    <link rel="apple-touch-icon" href={headArgs.image} key="headAppIcon" />
                    <meta property="og:image" content={headArgs.image} key="headOGImg" />
                    <meta property="twitter:image" content={headArgs.image} key="headTwitterImg" />
                </>
            )}
            {headArgs.webType && (
                <meta property="og:type" content={headArgs.webType} key="headOGWebType"/>
            )}
            {headArgs.robots && (
                <meta name="robots" content={headArgs.robots} key="headRobots" />
            )}

            <meta httpEquiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
            <meta name="opt-targeting" content="{&quot;type&quot;:&quot;Browse&quot;}" />
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

            <link rel="icon" type="image/x-icon" href="/favicon.ico" />

            <meta name="keywords" content="deaconn, technology, network, security, firewall, pentest, service, AI, machine, learning, blog" key="headKeywords" />
            
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:site" content="@deaconn-net" />
            <meta property="twitter:creator" content="@deaconn-net" />
            
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content="Deaconn" />
            <meta property="og:url" content={full_url} key="headOGUrl" />

            <meta name="msapplication-starturl" content={base_url} key="headMsappUrl"  />
            <meta name="application-name" content="Deaconn" />
            <meta name="apple-mobile-web-app-title" content="Deaconn" />
            <meta name="theme-color" content="#181a1b" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-touch-fullscreen" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
        </Head>
    );
}

export const Header: React.FC = () => {
    const { data: session } = useSession();

    return (
        <div className="bg-slate-800">
            <nav className="flex justify-between text-center container mx-auto">
                <ul className="flex justify-center list-none text-gray-100">
                    <Link className="nav-link" href="/">
                        <li className="nav-item">
                            <span><svg className="w-10 h-10 fill-white stroke-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.1" d="M17.7218 8.08382L14.7218 5.29811C13.4309 4.09937 12.7854 3.5 12 3.5C11.2146 3.5 10.5691 4.09937 9.2782 5.29811L6.2782 8.08382C5.64836 8.66867 5.33345 8.96109 5.16672 9.34342C5 9.72575 5 10.1555 5 11.015V16.9999C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 20.9999 7.11438 20.9999 9 20.9999H9.75V16.9999C9.75 15.7573 10.7574 14.7499 12 14.7499C13.2426 14.7499 14.25 15.7573 14.25 16.9999V20.9999H15C16.8856 20.9999 17.8284 20.9999 18.4142 20.4142C19 19.8284 19 18.8856 19 16.9999L19 11.015C19 10.1555 19 9.72575 18.8333 9.34342C18.6666 8.96109 18.3516 8.66866 17.7218 8.08382Z" /><path d="M19 9L19 17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21L14 21L10 21L9 21C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 9" strokeWidth="2" strokeLinejoin="round"/><path d="M3 11L7.5 7L10.6713 4.18109C11.429 3.50752 12.571 3.50752 13.3287 4.18109L16.5 7L21 11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 21V17C10 15.8954 10.8954 15 12 15V15C13.1046 15 14 15.8954 14 17V21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                            <span className="nav-text">Home</span>
                        </li>
                    </Link>
                    <Link className="nav-link" href="/service">
                        <li className="nav-item">
                            <span><svg className="w-10 h-10 fill-white text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 8.00002C9.79085 8.00002 7.99999 9.79088 7.99999 12C7.99999 14.2092 9.79085 16 12 16C14.2091 16 16 14.2092 16 12C16 9.79088 14.2091 8.00002 12 8.00002ZM9.99999 12C9.99999 10.8955 10.8954 10 12 10C13.429781046 10 14 10.8955 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 9.99999 13.1046 9.99999 12Z"/><path fillRule="evenodd" clipRule="evenodd" d="M12 8.00002C9.79085 8.00002 7.99999 9.79088 7.99999 12C7.99999 14.2092 9.79085 16 12 16C14.2091 16 16 14.2092 16 12C16 9.79088 14.2091 8.00002 12 8.00002ZM9.99999 12C9.99999 10.8955 10.8954 10 12 10C13.1046 10 14 10.8955 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 9.99999 13.1046 9.99999 12Z"/><path fillRule="evenodd" clipRule="evenodd" d="M10.7673 1.01709C10.9925 0.999829 11.2454 0.99993 11.4516 1.00001L12.5484 1.00001C12.7546 0.99993 13.0075 0.999829 13.2327 1.01709C13.4989 1.03749 13.8678 1.08936 14.2634 1.26937C14.7635 1.49689 15.1915 1.85736 15.5007 2.31147C15.7454 2.67075 15.8592 3.0255 15.9246 3.2843C15.9799 3.50334 16.0228 3.75249 16.0577 3.9557L16.1993 4.77635L16.2021 4.77788C16.2369 4.79712 16.2715 4.81659 16.306 4.8363L16.3086 4.83774L17.2455 4.49865C17.4356 4.42978 17.6693 4.34509 17.8835 4.28543C18.1371 4.2148 18.4954 4.13889 18.9216 4.17026C19.4614 4.20998 19.9803 4.39497 20.4235 4.70563C20.7734 4.95095 21.0029 5.23636 21.1546 5.4515C21.2829 5.63326 21.4103 5.84671 21.514 6.02029L22.0158 6.86003C22.1256 7.04345 22.2594 7.26713 22.3627 7.47527C22.4843 7.7203 22.6328 8.07474 22.6777 8.52067C22.7341 9.08222 22.6311 9.64831 22.3803 10.1539C22.1811 10.5554 21.9171 10.8347 21.7169 11.0212C21.5469 11.1795 21.3428 11.3417 21.1755 11.4746L20.5 12L21.1755 12.5254C21.3428 12.6584 21.5469 12.8205 21.7169 12.9789C21.9171 13.1653 22.1811 13.4446 22.3802 13.8461C22.631 14.3517 22.7341 14.9178 22.6776 15.4794C22.6328 15.9253 22.4842 16.2797 22.3626 16.5248C22.2593 16.7329 22.1255 16.9566 22.0158 17.14L21.5138 17.9799C21.4102 18.1535 21.2828 18.3668 21.1546 18.5485C21.0028 18.7637 20.7734 19.0491 20.4234 19.2944C19.9803 19.6051 19.4613 19.7901 18.9216 19.8298C18.4954 19.8612 18.1371 19.7852 17.8835 19.7146C17.6692 19.6549 17.4355 19.5703 17.2454 19.5014L16.3085 19.1623L16.306 19.1638C16.2715 19.1835 16.2369 19.2029 16.2021 19.2222L16.1993 19.2237L16.0577 20.0443C16.0228 20.2475 15.9799 20.4967 15.9246 20.7157C15.8592 20.9745 15.7454 21.3293 15.5007 21.6886C15.1915 22.1427 14.7635 22.5032 14.2634 22.7307C13.8678 22.9107 13.4989 22.9626 13.2327 22.983C13.0074 23.0002 12.7546 23.0001 12.5484 23H11.4516C11.2454 23.0001 10.9925 23.0002 10.7673 22.983C10.5011 22.9626 10.1322 22.9107 9.73655 22.7307C9.23648 22.5032 8.80849 22.1427 8.49926 21.6886C8.25461 21.3293 8.14077 20.9745 8.07542 20.7157C8.02011 20.4967 7.97723 20.2475 7.94225 20.0443L7.80068 19.2237L7.79791 19.2222C7.7631 19.2029 7.72845 19.1835 7.69396 19.1637L7.69142 19.1623L6.75458 19.5014C6.5645 19.5702 6.33078 19.6549 6.11651 19.7146C5.86288 19.7852 5.50463 19.8611 5.07841 19.8298C4.53866 19.7901 4.01971 19.6051 3.57654 19.2944C3.2266 19.0491 2.99714 18.7637 2.84539 18.5485C2.71718 18.3668 2.58974 18.1534 2.4861 17.9798L1.98418 17.14C1.87447 16.9566 1.74067 16.7329 1.63737 16.5248C1.51575 16.2797 1.36719 15.9253 1.32235 15.4794C1.26588 14.9178 1.36897 14.3517 1.61976 13.8461C1.81892 13.4446 2.08289 13.1653 2.28308 12.9789C2.45312 12.8205 2.65717 12.6584 2.82449 12.5254L3.47844 12.0054V11.9947L2.82445 11.4746C2.65712 11.3417 2.45308 11.1795 2.28304 11.0212C2.08285 10.8347 1.81888 10.5554 1.61972 10.1539C1.36893 9.64832 1.26584 9.08224 1.3223 8.52069C1.36714 8.07476 1.51571 7.72032 1.63732 7.47528C1.74062 7.26715 1.87443 7.04347 1.98414 6.86005L2.48605 6.02026C2.58969 5.84669 2.71714 5.63326 2.84534 5.45151C2.9971 5.23637 3.22655 4.95096 3.5765 4.70565C4.01966 4.39498 4.53862 4.20999 5.07837 4.17027C5.50458 4.1389 5.86284 4.21481 6.11646 4.28544C6.33072 4.34511 6.56444 4.4298 6.75451 4.49867L7.69141 4.83775L7.69394 4.8363C7.72844 4.8166 7.7631 4.79712 7.79791 4.77788L7.80068 4.77635L7.94225 3.95571C7.97723 3.7525 8.02011 3.50334 8.07542 3.2843C8.14077 3.0255 8.25461 2.67075 8.49926 2.31147C8.80849 1.85736 9.23648 1.49689 9.73655 1.26937C10.1322 1.08936 10.5011 1.03749 10.7673 1.01709ZM14.0938 4.3363C14.011 3.85634 13.9696 3.61637 13.8476 3.43717C13.7445 3.2858 13.6019 3.16564 13.4352 3.0898C13.2378 3.00002 12.9943 3.00002 12.5073 3.00002H11.4927C11.0057 3.00002 10.7621 3.00002 10.5648 3.0898C10.3981 3.16564 10.2555 3.2858 10.1524 3.43717C10.0304 3.61637 9.98895 3.85634 9.90615 4.3363L9.75012 5.24064C9.69445 5.56333 9.66662 5.72467 9.60765 5.84869C9.54975 5.97047 9.50241 6.03703 9.40636 6.13166C9.30853 6.22804 9.12753 6.3281 8.76554 6.52822C8.73884 6.54298 8.71227 6.55791 8.68582 6.57302C8.33956 6.77078 8.16643 6.86966 8.03785 6.90314C7.91158 6.93602 7.83293 6.94279 7.70289 6.93196C7.57049 6.92094 7.42216 6.86726 7.12551 6.7599L6.11194 6.39308C5.66271 6.2305 5.43809 6.14921 5.22515 6.16488C5.04524 6.17811 4.87225 6.23978 4.72453 6.34333C4.5497 6.46589 4.42715 6.67094 4.18206 7.08103L3.72269 7.84965C3.46394 8.2826 3.33456 8.49907 3.31227 8.72078C3.29345 8.90796 3.32781 9.09665 3.41141 9.26519C3.51042 9.4648 3.7078 9.62177 4.10256 9.9357L4.82745 10.5122C5.07927 10.7124 5.20518 10.8126 5.28411 10.9199C5.36944 11.036 5.40583 11.1114 5.44354 11.2504C5.47844 11.379 5.47844 11.586 5.47844 12C5.47844 12.414 5.47844 12.621 5.44354 12.7497C5.40582 12.8887 5.36944 12.9641 5.28413 13.0801C5.20518 13.1875 5.07927 13.2876 4.82743 13.4879L4.10261 14.0643C3.70785 14.3783 3.51047 14.5352 3.41145 14.7349C3.32785 14.9034 3.29349 15.0921 3.31231 15.2793C3.33461 15.501 3.46398 15.7174 3.72273 16.1504L4.1821 16.919C4.4272 17.3291 4.54974 17.5342 4.72457 17.6567C4.8723 17.7603 5.04528 17.8219 5.2252 17.8352C5.43813 17.8508 5.66275 17.7695 6.11199 17.607L7.12553 17.2402C7.42216 17.1328 7.5705 17.0791 7.7029 17.0681C7.83294 17.0573 7.91159 17.064 8.03786 17.0969C8.16644 17.1304 8.33956 17.2293 8.68582 17.427C8.71228 17.4421 8.73885 17.4571 8.76554 17.4718C9.12753 17.6719 9.30853 17.772 9.40635 17.8684C9.50241 17.963 9.54975 18.0296 9.60765 18.1514C9.66662 18.2754 9.69445 18.4367 9.75012 18.7594L9.90615 19.6637C9.98895 20.1437 10.0304 20.3837 10.1524 20.5629C10.2555 20.7142 10.3981 20.8344 10.5648 20.9102C10.7621 21 11.0057 21 11.4927 21H12.5073C12.9943 21 13.2378 21 13.4352 20.9102C13.6019 20.8344 13.7445 20.7142 13.8476 20.5629C13.9696 20.3837 14.011 20.1437 14.0938 19.6637L14.2499 18.7594C14.3055 18.4367 14.3334 18.2754 14.3923 18.1514C14.4502 18.0296 14.4976 17.963 14.5936 17.8684C14.6915 17.772 14.8725 17.6719 15.2344 17.4718C15.2611 17.4571 15.2877 17.4421 15.3141 17.427C15.6604 17.2293 15.8335 17.1304 15.9621 17.0969C16.0884 17.064 16.167 17.0573 16.2971 17.0681C16.4295 17.0791 16.5778 17.1328 16.8744 17.2402L17.888 17.607C18.3372 17.7696 18.5619 17.8509 18.7748 17.8352C18.9547 17.8219 19.1277 17.7603 19.2754 17.6567C19.4502 17.5342 19.5728 17.3291 19.8179 16.919L20.2773 16.1504C20.536 15.7175 20.6654 15.501 20.6877 15.2793C20.7065 15.0921 20.6721 14.9034 20.5885 14.7349C20.4895 14.5353 20.2921 14.3783 19.8974 14.0643L19.1726 13.4879C18.9207 13.2876 18.7948 13.1875 18.7159 13.0801C18.6306 12.9641 18.5942 12.8887 18.5564 12.7497C18.5215 12.6211 18.5215 12.414 18.5215 12C18.5215 11.586 18.5215 11.379 18.5564 11.2504C18.5942 11.1114 18.6306 11.036 18.7159 10.9199C18.7948 10.8126 18.9207 10.7124 19.1725 10.5122L19.8974 9.9357C20.2922 9.62176 20.4896 9.46479 20.5886 9.26517C20.6722 9.09664 20.7065 8.90795 20.6877 8.72076C20.6654 8.49906 20.5361 8.28259 20.2773 7.84964L19.8179 7.08102C19.5728 6.67093 19.4503 6.46588 19.2755 6.34332C19.1277 6.23977 18.9548 6.1781 18.7748 6.16486C18.5619 6.14919 18.3373 6.23048 17.888 6.39307L16.8745 6.75989C16.5778 6.86725 16.4295 6.92093 16.2971 6.93195C16.167 6.94278 16.0884 6.93601 15.9621 6.90313C15.8335 6.86965 15.6604 6.77077 15.3142 6.57302C15.2877 6.55791 15.2611 6.54298 15.2345 6.52822C14.8725 6.3281 14.6915 6.22804 14.5936 6.13166C14.4976 6.03703 14.4502 5.97047 14.3923 5.84869C14.3334 5.72467 14.3055 5.56332 14.2499 5.24064L14.0938 4.3363Z"/>
                            </svg></span>
                            <span className="nav-text">Services</span>
                        </li>
                    </Link>
                    <Link className="nav-link" href="/blog">
                        <li className="nav-item">
                            <span><svg className="w-10 h-10 fill-white" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="M421.073,221.719c-0.578,11.719-9.469,26.188-23.797,40.094v183.25c-0.016,4.719-1.875,8.719-5.016,11.844 c-3.156,3.063-7.25,4.875-12.063,4.906H81.558c-4.781-0.031-8.891-1.844-12.047-4.906c-3.141-3.125-4.984-7.125-5-11.844V152.219 c0.016-4.703,1.859-8.719,5-11.844c3.156-3.063,7.266-4.875,12.047-4.906h158.609c12.828-16.844,27.781-34.094,44.719-49.906 c0.078-0.094,0.141-0.188,0.219-0.281H81.558c-18.75-0.016-35.984,7.531-48.25,19.594c-12.328,12.063-20.016,28.938-20,47.344 v292.844c-0.016,18.406,7.672,35.313,20,47.344C45.573,504.469,62.808,512,81.558,512h298.641c18.781,0,36.016-7.531,48.281-19.594 c12.297-12.031,20-28.938,19.984-47.344V203.469c0,0-0.125-0.156-0.328-0.313C440.37,209.813,431.323,216.156,421.073,221.719z"/><path d="M498.058,0c0,0-15.688,23.438-118.156,58.109C275.417,93.469,211.104,237.313,211.104,237.313 c-15.484,29.469-76.688,151.906-76.688,151.906c-16.859,31.625,14.031,50.313,32.156,17.656 c34.734-62.688,57.156-119.969,109.969-121.594c77.047-2.375,129.734-69.656,113.156-66.531c-21.813,9.5-69.906,0.719-41.578-3.656 c68-5.453,109.906-56.563,96.25-60.031c-24.109,9.281-46.594,0.469-51-2.188C513.386,138.281,498.058,0,498.058,0z"/></g></svg></span>
                            <span className="nav-text">Blog</span>
                        </li>
                    </Link>
                    <Link className="nav-link" href="/about">
                        <li className="nav-item">
                            <span><svg className="w-10 h-10 fill-white" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="1" fillRule="evenodd"><g id="drop" transform="translate(42.666667, 42.666667)"><path d="M213.333333,3.55271368e-14 C331.154987,3.55271368e-14 426.666667,95.51168 426.666667,213.333333 C426.666667,331.153707 331.154987,426.666667 213.333333,426.666667 C95.51296,426.666667 3.55271368e-14,331.153707 3.55271368e-14,213.333333 C3.55271368e-14,95.51168 95.51296,3.55271368e-14 213.333333,3.55271368e-14 Z M234.713387,192 L192.04672,192 L192.04672,320 L234.713387,320 L234.713387,192 Z M213.55008,101.333333 C197.99616,101.333333 186.713387,112.5536 186.713387,127.704107 C186.713387,143.46752 197.698773,154.666667 213.55008,154.666667 C228.785067,154.666667 240.04672,143.46752 240.04672,128 C240.04672,112.5536 228.785067,101.333333 213.55008,101.333333 Z"></path></g></g></svg></span>
                            <span className="nav-text">About Us</span>
                        </li>
                    </Link>
                </ul>
                <ul className="flex justify-center text-gray-100">
                    {session ? (
                        <Link className="nav-link" href="#" onClick={(e) => {
                            e.preventDefault();
                        }}>
                            <li className="nav-link">
                                <span><svg className="w-10 h-10 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.6,3.32a3.86,3.86,0,1,0,3.86,3.85A3.85,3.85,0,0,0,9.6,3.32M16.35,11a.26.26,0,0,0-.25.21l-.18,1.27a4.63,4.63,0,0,0-.82.45l-1.2-.48a.3.3,0,0,0-.3.13l-1,1.66a.24.24,0,0,0,.06.31l1,.79a3.94,3.94,0,0,0,0,1l-1,.79a.23.23,0,0,0-.06.3l1,1.67c.06.13.19.13.3.13l1.2-.49a3.85,3.85,0,0,0,.82.46l.18,1.27a.24.24,0,0,0,.25.2h1.93a.24.24,0,0,0,.23-.2l.18-1.27a5,5,0,0,0,.81-.46l1.19.49c.12,0,.25,0,.32-.13l1-1.67a.23.23,0,0,0-.06-.3l-1-.79a4,4,0,0,0,0-.49,2.67,2.67,0,0,0,0-.48l1-.79a.25.25,0,0,0,.06-.31l-1-1.66c-.06-.13-.19-.13-.31-.13L19.5,13a4.07,4.07,0,0,0-.82-.45l-.18-1.27a.23.23,0,0,0-.22-.21H16.46M9.71,13C5.45,13,2,14.7,2,16.83v1.92h9.33a6.65,6.65,0,0,1,0-5.69A13.56,13.56,0,0,0,9.71,13m7.6,1.43a1.45,1.45,0,1,1,0,2.89,1.45,1.45,0,0,1,0-2.89Z"/></svg></span>
                                <span className="nav-text">Account</span>
                            </li>
                        </Link>
                    ) : (
                        <Link className="nav-link" href="#" onClick={(e) => {
                            e.preventDefault();

                            signIn("discord");
                        }}>
                            <li className="nav-item">
                                <span><svg className="w-10 h-10 fill-none stroke-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20H19C20.1046 20 21 19.1046 21 18V6C21 4.89543 20.1046 4 19 4H11M3 12H14M14 12L11 15M14 12L11 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                                <span className="nav-text">Sign In</span>
                            </li>
                        </Link>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export const Footer: React.FC = () => {
    return (
        <footer className="p-18 bg-slate-800">
            <div className="container mx-auto flex flex-wrap text-center">
                <div className="footer-section">
                    <div>
                        <h3 className="footer-title">Links</h3>
                        <ul className="list-none">
                            <li className="footer-link"><Link href="/">Home</Link></li>
                            <li className="footer-link"><Link href="/service">Services</Link></li>
                            <li className="footer-link"><Link href="/blog">Blog</Link></li>
                            <li className="footer-link"><Link href="/about">About Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-section">
                    <div>
                        <h3 className="footer-title">Services</h3>
                    </div>
                </div>
                <div className="footer-section">
                    <div>
                        <h3 className="footer-title">Partners</h3>
                        <ul className="list-none">
                            <li className="footer-link"><a href="https://moddingcommunity.com" target="_blank">The Modding Community</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Deaconn;