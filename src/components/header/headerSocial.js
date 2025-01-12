import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderSocial = () => {
    const isDarkMode = useSelector((store) => store.isDarkMode);
    const socialFillColor = isDarkMode ? '#FFF' : '#3730A3';

    const githubLogo = <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 28" fill="none">
        <path d="M12.9993 0.757569C6.62413 0.756721 1.18956 5.54566 0.16884 12.0638C-0.851878 18.5819 2.84266 24.9046 8.89128 26.991C9.54273 27.1124 9.77596 26.6981 9.77596 26.3419C9.77596 26.022 9.76553 25.1745 9.76162 24.0477C6.14606 24.8574 5.38255 22.242 5.38255 22.242C5.14453 21.4282 4.63283 20.7296 3.94023 20.273C2.76762 19.4377 4.03014 19.4566 4.03014 19.4566C4.86488 19.5751 5.59955 20.0874 6.01967 20.8439C6.37528 21.5136 6.97439 22.0085 7.68388 22.2185C8.39338 22.4286 9.15449 22.3365 9.7981 21.9626C9.85859 21.2798 10.1519 20.6416 10.6255 20.1624C7.74081 19.8237 4.70765 18.6685 4.70765 13.5092C4.69164 12.1748 5.17005 10.8848 6.04443 9.90465C5.6488 8.74312 5.69539 7.4691 6.17472 6.3419C6.17472 6.3419 7.26525 5.97888 9.74729 7.71977C11.876 7.11519 14.1227 7.11519 16.2514 7.71977C18.7347 5.97753 19.824 6.3419 19.824 6.3419C20.3055 7.46856 20.3521 8.74348 19.9543 9.90465C20.8318 10.8847 21.3099 12.1781 21.2884 13.5146C21.2884 18.6874 18.2527 19.8237 15.3576 20.157C15.9821 20.8183 16.3024 21.7256 16.2371 22.6482C16.2371 24.4485 16.2214 25.9006 16.2214 26.3419C16.2214 26.7022 16.4534 27.1205 17.1165 26.9883C23.1626 24.8983 26.8532 18.5753 25.8304 12.0589C24.8076 5.54251 19.3732 0.756058 12.9993 0.757569Z" fill={socialFillColor} /></svg>

    const linkedinLogo = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
        <path d="M13.3333 25.4881H7.99998V8.68442H13.3333V11.485C14.4701 9.96605 16.1941 9.0605 18.0333 9.01629C21.3407 9.03557 24.0096 11.8622 24 15.3359V25.4881H18.6666V16.036C18.4533 14.4714 17.1756 13.3104 15.6706 13.3138C15.0123 13.3357 14.391 13.6384 13.9499 14.1521C13.5088 14.6658 13.2862 15.3461 13.3333 16.036V25.4881ZM5.33332 25.4881H0V8.68442H5.33332V25.4881ZM2.66666 5.88381C1.1939 5.88381 0 4.62993 0 3.0832C0 1.53647 1.1939 0.282593 2.66666 0.282593C4.13942 0.282593 5.33332 1.53647 5.33332 3.0832C5.33332 3.82597 5.05237 4.53831 4.55228 5.06353C4.05218 5.58875 3.3739 5.88381 2.66666 5.88381Z" fill={socialFillColor} /></svg>;

    // mapte kullanarak gösterelim
    const socialItems = [
        {
            logo: githubLogo,
            title: 'Github',
            url: "https://github.com/tutamuslu"
        },
        {
            logo: linkedinLogo,
            title: 'Linkedin',
            url: "https://www.linkedin.com/in/tugbamuslu/"
        }
    ];
    //github ve llinkedin için
    const socialItemClass = isDarkMode ? 'social-item social-item-dark' : 'social-item social-item-light';

    return (
        <div className='social-area'>
            {
                socialItems.map(item => (
                   <Link to={item.url} target="blank">
                     <div className={socialItemClass} key={item.title}>
                            <div className='social-icon'>
                                {item.logo}
                            </div>
                            {item.title}
                        </div>
                   </Link>
                ))
            }
        </div>

    )
}

export default HeaderSocial;