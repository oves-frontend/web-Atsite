import React from 'react';
import Link from 'next/link';

const CTA = (CtaTitle, CtaSuggestion, CtaBtnLabel, CtaBtnLink) => {
    return (
        <div className="cta-area ptb-80">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-6">
                        <div className="cta-content" id="title">
                            <h3>{CtaTitle}</h3>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-6">
                        <div className="cta-right-content">
                            <div className="hosting-price">
                                <span>{CtaSuggestion}</span>
                            </div>

                            <div className="buy-btn">
                                <Link href= {CtaBtnLink}>
                                    <a className="btn btn-primary">{CtaBtnLabel}</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CTA;
