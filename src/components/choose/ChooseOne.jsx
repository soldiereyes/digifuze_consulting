import React from "react";
import { Link } from "react-router-dom";

export const ChooseOne = () => {
  return (
    <div className="td-chose-area pb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="td-chose-top-border pt-140">
              <div className="row">
                <div
                  className="col-lg-6 mb-25 wow fadeInUp"
                  data-wow-delay=".3s"
                  data-wow-duration="1s"
                >
                  <div className="td-chose-title-wrap mb-60">
                    <span className="td-section-title-pre mb-10">
                      Why Choose Us
                    </span>
                    <h2 className="td-section-title">
                      Learn about our financial services
                    </h2>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 mb-25 wow fadeInUp"
                  data-wow-delay=".4s"
                  data-wow-duration="1s"
                >
                  <div className="td-chose-item ml-15">
                    <div className="td-chose-icon mb-40">
                      <span>
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 60 60"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_335_2972)">
                            <path
                              d="M58.2414 56.4844H56.3664V21.7973C56.3664 20.8266 55.5794 20.0396 54.6086 20.0396H47.5775C46.6067 20.0396 45.8197 20.8266 45.8197 21.7973V56.4844H42.3041V33.5159C42.3041 32.5452 41.5171 31.7581 40.5463 31.7581H33.5152C32.5444 31.7581 31.7574 32.5452 31.7574 33.5159V56.4844H28.2418V39.9612C28.2418 38.9904 27.4548 38.2034 26.484 38.2034H19.4529C18.4821 38.2034 17.6951 38.9904 17.6951 39.9612V56.4844H14.1795V44.1798C14.1795 43.2091 13.3925 42.4221 12.4217 42.4221H5.39055C4.41978 42.4221 3.63276 43.2091 3.63276 44.1798V56.4844H1.75779C0.787021 56.4844 0 57.2714 0 58.2422C0 59.2129 0.787021 59.9999 1.75779 59.9999H58.2414C59.2122 59.9999 59.9992 59.2129 59.9992 58.2422C59.9992 57.2714 59.2122 56.4844 58.2414 56.4844Z"
                              fill="#20282D"
                            />
                            <path
                              d="M1.75779 37.7703C12.7285 37.7703 24.6254 33.8303 35.2573 26.676C43.5839 21.0728 50.5249 13.9147 54.8364 6.58506L56.5436 12.9561C56.7541 13.7415 57.7702 14.42 58.6964 14.199C59.6407 13.9737 60.1905 12.9839 59.9393 12.0462L57.0609 1.30373C56.8095 0.366121 55.8461 -0.190512 54.908 0.060852L44.1656 2.93929C43.2279 3.19054 42.6715 4.15439 42.9227 5.09211C43.1741 6.02983 44.1375 6.58647 45.0756 6.33498L51.996 4.48064C47.9736 11.4703 41.3258 18.3547 33.2945 23.7592C23.2367 30.5274 12.0367 34.2548 1.75779 34.2548C0.78702 34.2548 0 35.0418 0 36.0125C0 36.9833 0.78702 37.7703 1.75779 37.7703Z"
                              fill="#B3BEC5"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_335_2972">
                              <rect width="60" height="60" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                    <div className="td-chose-content">
                      <h4 className="td-chose-title">
                        <Link to="/service-details">Financial Growth</Link>
                      </h4>
                      <p>
                        Our focus is on delivering superior value to our
                        clients.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 mb-25 wow fadeInUp"
                  data-wow-delay=".5s"
                  data-wow-duration="1s"
                >
                  <div className="td-chose-item ml-35">
                    <div className="td-chose-icon mb-40">
                      <span>
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 60 60"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_335_2976)">
                            <path
                              d="M12.7448 60.0002C12.4036 58.6876 12.6437 57.2781 13.4454 56.1357L21.9884 43.9617L17.1688 37.2771C16.935 36.9527 16.5767 36.7905 16.2183 36.7905C15.86 36.7905 15.5016 36.9527 15.2677 37.2771L0.223387 58.143C-0.33548 58.9181 0.218465 60.0002 1.17401 60.0002H12.7448Z"
                              fill="#20282D"
                            />
                            <path
                              d="M39.8125 24.8849V18.75H54.4609C55.0993 18.75 55.6875 18.4038 55.9975 17.8459C56.3075 17.288 56.2906 16.6056 55.9534 16.0636L52.8855 11.1328L55.9534 6.20203C56.2907 5.66004 56.3076 4.97777 55.9975 4.41973C55.6874 3.86168 55.0994 3.51563 54.4609 3.51563H39.8125V1.75781C39.8125 0.787031 39.0255 0 38.0547 0C37.0839 0 36.2969 0.787031 36.2969 1.75781V24.8849C37.3015 23.7818 38.7846 23.7596 39.8125 24.8849Z"
                              fill="#B3BEC5"
                            />
                            <path
                              d="M47.6909 40.9189L43.4947 44.8283C43.1572 45.1427 42.7268 45.3 42.2964 45.3C41.866 45.3 41.4357 45.1427 41.0982 44.8283L38.0546 41.9929L35.0116 44.8282C34.3365 45.4573 33.2901 45.4573 32.615 44.8282L28.4193 40.9189L16.324 58.1551C15.7791 58.9317 16.3346 60.0001 17.2833 60.0001H31.2633H58.8269C59.7756 60.0001 60.3311 58.9317 59.7862 58.1551L47.6909 40.9189Z"
                              fill="#20282D"
                            />
                            <path
                              d="M33.8134 41.1393L36.8563 38.3039C37.5313 37.675 38.5777 37.6749 39.2528 38.3038L42.2965 41.1394L45.6825 38.0566L39.0144 28.5544C38.7811 28.222 38.4182 28.0557 38.0551 28.0557C37.6922 28.0557 37.3291 28.222 37.0958 28.5544L30.4277 38.0566L33.8134 41.1393Z"
                              fill="#20282D"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_335_2976">
                              <rect width="60" height="60" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                    <div className="td-chose-content">
                      <h4 className="td-chose-title">
                        <Link to="/service-details">Goal Archive</Link>
                      </h4>
                      <p>
                        Our focus is on delivering superior value to our
                        clients.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 mb-25 wow fadeInUp"
                  data-wow-delay=".6s"
                  data-wow-duration="1s"
                >
                  <div className="td-chose-item">
                    <div className="td-chose-icon mb-40">
                      <span>
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 60 60"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_335_2980)">
                            <path
                              d="M23.4676 14.3306L22.59 19.4477C22.438 20.3336 22.7953 21.2119 23.5223 21.7402C24.2493 22.2683 25.1953 22.3368 25.9907 21.9185L30.5862 19.5026L35.1818 21.9185C35.5277 22.1005 35.902 22.1903 36.2746 22.1903C36.7584 22.1903 37.2391 22.0386 37.6499 21.7402C38.3769 21.212 38.7342 20.3336 38.5823 19.4477L37.7047 14.3305L41.4226 10.7065C42.0661 10.0792 42.2934 9.15855 42.0157 8.30391C41.7381 7.44926 41.013 6.83801 40.1237 6.70875L34.9856 5.96215L32.688 1.30641L32.6879 1.30629C32.2901 0.500508 31.4846 0 30.5861 0C29.6875 0 28.8821 0.500625 28.4844 1.30641L26.1866 5.96215L21.0486 6.70875C20.1593 6.83801 19.4344 7.44914 19.1565 8.30391C18.8788 9.15855 19.106 10.0792 19.7496 10.7065L23.4676 14.3306Z"
                              fill="#B3BEC5"
                            />
                            <path
                              d="M52.9927 37.9005C52.0464 31.3665 46.4458 26.5186 39.8436 26.5186H35.7868L38.9711 43.1418C39.1873 44.1982 38.8361 45.3111 38.0513 46.0516L38.0512 46.0517L32.7783 51.0261C32.1752 51.595 31.4011 51.8797 30.6271 51.8797C29.8531 51.8797 29.079 51.5953 28.4758 51.0261L23.2028 46.0517C22.4179 45.311 22.0667 44.198 22.283 43.1418L25.4674 26.5186H20.1564C13.5542 26.5186 7.95368 31.3665 7.00727 37.9005L4.24669 56.9619C4.01466 58.5643 5.25743 60 6.87661 60H53.1235C54.7427 60 55.9853 58.5643 55.7533 56.9619L52.9927 37.9005Z"
                              fill="#20282D"
                            />
                            <path
                              d="M25.9414 43.9053L30.6289 48.3275L35.3164 43.9053L31.9858 26.5186H29.272L25.9414 43.9053Z"
                              fill="#20282D"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_335_2980">
                              <rect width="60" height="60" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                    <div className="td-chose-content">
                      <h4 className="td-chose-title">
                        <Link to="/service-details">Business Planning</Link>
                      </h4>
                      <p>
                        Our focus is on delivering superior value to our
                        clients.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 mb-25 wow fadeInUp"
                  data-wow-delay=".7s"
                  data-wow-duration="1s"
                >
                  <div className="td-chose-item ml-10">
                    <div className="td-chose-icon mb-40">
                      <span>
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 60 60"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_335_2984)">
                            <path
                              d="M15.2623 16.2031L10.0641 16.6047C8.6177 16.7165 7.32946 17.4746 6.52955 18.6845L0.534634 27.7515C-0.0720405 28.6691 -0.168485 29.8174 0.276472 30.8233C0.721547 31.8293 1.63619 32.5303 2.72309 32.6987L7.48263 33.4358C8.59602 27.5272 11.2613 21.6332 15.2623 16.2031Z"
                              fill="#20282D"
                            />
                            <path
                              d="M26.5645 52.5175L27.3017 57.277C27.4701 58.3639 28.1711 59.2785 29.1769 59.7235C29.5954 59.9087 30.0383 60.0001 30.4791 60.0001C31.0982 60.0001 31.7129 59.8197 32.2488 59.4653L41.316 53.4705C42.526 52.6705 43.284 51.3822 43.3956 49.936L43.7972 44.7378C38.367 48.7389 32.4731 51.4042 26.5645 52.5175Z"
                              fill="#20282D"
                            />
                            <path
                              d="M24.7737 49.2183C24.9389 49.2183 25.1051 49.2047 25.2709 49.1771C27.7464 48.7632 30.1323 48.0659 32.4083 47.1533L12.8463 27.5913C11.9337 29.8672 11.2364 32.2531 10.8225 34.7287C10.6594 35.7045 10.9867 36.6986 11.6862 37.3982L22.6014 48.3134C23.1822 48.8941 23.966 49.2183 24.7737 49.2183Z"
                              fill="#20282D"
                            />
                            <path
                              d="M55.2163 26.6017C60.0032 17.347 60.1805 7.56709 59.9303 2.98041C59.8447 1.40882 58.5917 0.155858 57.02 0.0701948C56.2732 0.0294138 55.3881 0 54.3905 0C49.2617 0 41.1464 0.77683 33.3987 4.78426C27.2415 7.96904 19.1677 14.9816 14.4043 24.1974C14.4605 24.2413 14.5155 24.288 14.5673 24.3398L35.6609 45.4334C35.7127 45.4851 35.7592 45.54 35.8032 45.5962C45.0189 40.8327 52.0315 32.7589 55.2163 26.6017ZM34.8868 12.6843C38.3134 9.25762 43.8893 9.25727 47.3161 12.6843C48.9762 14.3442 49.8904 16.5514 49.8904 18.899C49.8904 21.2466 48.9762 23.4538 47.3161 25.1138C45.603 26.8269 43.3518 27.6837 41.1015 27.6839C38.8505 27.684 36.6004 26.8274 34.8868 25.1138C33.2267 23.4538 32.3124 21.2466 32.3124 18.899C32.3124 16.5514 33.2267 14.3442 34.8868 12.6843Z"
                              fill="#20282D"
                            />
                            <path
                              d="M37.3727 22.6277C39.4287 24.6837 42.7744 24.6839 44.8305 22.6277C45.8264 21.6316 46.375 20.3074 46.375 18.8988C46.375 17.4902 45.8264 16.166 44.8305 15.17C43.8025 14.1419 42.452 13.6279 41.1016 13.6279C39.7512 13.6279 38.4007 14.1419 37.3728 15.17C36.3768 16.166 35.8281 17.4902 35.8281 18.8988C35.8281 20.3074 36.3767 21.6317 37.3727 22.6277Z"
                              fill="#20282D"
                            />
                            <path
                              d="M1.79303 49.4456C2.24291 49.4456 2.69279 49.2741 3.03592 48.9307L8.77494 43.1917C9.46143 42.5052 9.46143 41.3923 8.77494 40.7058C8.08858 40.0193 6.97553 40.0193 6.28904 40.7058L0.55002 46.4448C-0.136465 47.1313 -0.136465 48.2442 0.55002 48.9307C0.893262 49.2739 1.34314 49.4456 1.79303 49.4456Z"
                              fill="#B3BEC5"
                            />
                            <path
                              d="M14.0346 45.9651C13.3482 45.2786 12.2351 45.2786 11.5487 45.9651L0.514863 56.9988C-0.171621 57.6853 -0.171621 58.7983 0.514863 59.4847C0.858105 59.828 1.30799 59.9995 1.75787 59.9995C2.20775 59.9995 2.65764 59.828 3.00076 59.4846L14.0344 48.451C14.721 47.7645 14.721 46.6515 14.0346 45.9651Z"
                              fill="#B3BEC5"
                            />
                            <path
                              d="M16.8085 51.2248L11.0696 56.9638C10.3831 57.6503 10.3831 58.7633 11.0696 59.4497C11.4128 59.793 11.8627 59.9647 12.3124 59.9647C12.7622 59.9647 13.2122 59.7931 13.5553 59.4497L19.2944 53.7107C19.9808 53.0242 19.9808 51.9113 19.2944 51.2248C18.608 50.5383 17.4949 50.5383 16.8085 51.2248Z"
                              fill="#B3BEC5"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_335_2984">
                              <rect width="60" height="60" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                    <div className="td-chose-content">
                      <h4 className="td-chose-title">
                        <Link to="/service-details">Boost Business</Link>
                      </h4>
                      <p>
                        Our focus is on delivering superior value to our
                        clients.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 mb-25 wow fadeInUp"
                  data-wow-delay=".8s"
                  data-wow-duration="1s"
                >
                  <div className="td-chose-item ml-15">
                    <div className="td-chose-icon mb-40">
                      <span>
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 60 60"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_335_2988)">
                            <path
                              d="M40.0902 42.4183C47.3969 38.7271 52.4071 31.152 52.4071 22.4066C52.4071 10.155 42.5741 0.199937 30.3694 0.00294451C18.0188 -0.196391 7.76008 9.7506 7.59578 22.1016C7.47777 30.9762 12.5199 38.6852 19.9121 42.4191C20.7531 42.8439 21.2867 43.7019 21.2867 44.6441V44.7656H38.7141V44.6441C38.7141 43.7013 39.2487 42.8434 40.0902 42.4183ZM25.7805 30.4688C25.3306 30.4688 24.8807 30.2971 24.5376 29.9538L20.7509 26.1672C20.0644 25.4808 20.0644 24.3677 20.7509 23.6813C21.4373 22.9949 22.5503 22.9949 23.2368 23.6813L25.7806 26.2251L36.2564 15.7492C36.9428 15.0628 38.0559 15.0628 38.7423 15.7492C39.4288 16.4356 39.4288 17.5486 38.7423 18.2351L27.0236 29.9538C26.6802 30.2971 26.2303 30.4688 25.7805 30.4688Z"
                              fill="#20282D"
                            />
                            <path
                              d="M21.2871 48.2812H38.7145V51.7969H21.2871V48.2812Z"
                              fill="#B3BEC5"
                            />
                            <path
                              d="M21.2871 57.5104C21.2871 58.8853 22.4018 60 23.7768 60H36.2249C37.5998 60 38.7145 58.8853 38.7145 57.5104V55.3125H21.2871V57.5104Z"
                              fill="#B3BEC5"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_335_2988">
                              <rect width="60" height="60" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                    <div className="td-chose-content">
                      <h4 className="td-chose-title">
                        <Link to="/service-details">Idea Generate</Link>
                      </h4>
                      <p>
                        Our focus is on delivering superior value to our
                        clients.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-4 col-sm-6 mb-25 wow fadeInUp"
                  data-wow-delay=".9s"
                  data-wow-duration="1s"
                >
                  <div className="td-chose-item ml-35">
                    <div className="td-chose-icon mb-40">
                      <span>
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 60 60"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_335_2992)">
                            <path
                              d="M57.7626 5.89302L53.4971 6.50251L54.1066 2.23701C54.3715 0.382983 52.1133 -0.75022 50.7869 0.577514L42.9613 8.40306C42.662 8.70236 42.4678 9.09083 42.408 9.5099L41.522 15.7115L31.8603 25.3732C31.0952 25.0071 30.2489 24.7852 29.3457 24.7852C26.1093 24.7852 23.4766 27.4179 23.4766 30.6543C23.4766 33.8906 26.1093 36.5234 29.3457 36.5234C32.582 36.5234 35.2148 33.8906 35.2148 30.6543C35.2148 29.751 34.9928 28.9048 34.6267 28.1397L44.2885 18.4779L50.49 17.592C50.9091 17.5321 51.2975 17.3379 51.5969 17.0386L59.4224 9.21306C60.7448 7.89037 59.6252 5.63205 57.7626 5.89302Z"
                              fill="#B3BEC5"
                            />
                            <path
                              d="M45.2175 23.0823L39.0194 29.2799C39.0832 29.7302 39.1276 30.1866 39.1276 30.6542C39.1276 36.0482 34.7397 40.4361 29.3457 40.4361C23.9517 40.4361 19.5638 36.0482 19.5638 30.6542C19.5638 25.2602 23.9516 20.8723 29.3457 20.8723C29.8132 20.8723 30.2695 20.9166 30.7196 20.9804L36.9175 14.7824C34.6201 13.6818 32.0587 13.0469 29.3457 13.0469C19.6371 13.0469 11.7383 20.9457 11.7383 30.6543C11.7383 40.3629 19.6371 48.2617 29.3457 48.2617C39.0543 48.2617 46.9531 40.3629 46.9531 30.6543C46.953 27.9412 46.3183 25.3798 45.2175 23.0823Z"
                              fill="#9EAFB9"
                            />
                            <path
                              d="M55.9266 18.242L54.3634 19.8051C53.4718 20.6974 52.2923 21.2871 51.0436 21.4653L48.9225 21.7685C50.1589 24.4811 50.8659 27.4838 50.8659 30.6543C50.8659 42.5206 41.212 52.1745 29.3457 52.1745C17.4795 52.1745 7.82555 42.5206 7.82555 30.6543C7.82555 18.788 17.4796 9.13414 29.3457 9.13414C32.5163 9.13414 35.5189 9.84113 38.2316 11.0776L38.5346 8.95648C38.7129 7.70762 39.3027 6.52824 40.1948 5.63598L41.7577 4.0734C37.9025 2.26789 33.6997 1.30859 29.3456 1.30859C13.1641 1.30859 0 14.4729 0 30.6543C0 46.8358 13.1643 60.0001 29.3457 60.0001C45.5272 60.0001 58.6915 46.8358 58.6915 30.6543C58.6915 26.3001 57.7322 22.0971 55.9266 18.242Z"
                              fill="#20282D"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_335_2992">
                              <rect width="60" height="60" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                    <div className="td-chose-content">
                      <h4 className="td-chose-title">
                        <Link to="/service-details">Business Growth</Link>
                      </h4>
                      <p>
                        Our focus is on delivering superior value to our
                        clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
