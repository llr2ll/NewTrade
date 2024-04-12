export function Loader(){
    return  <div style={{
                    transition: "all 0s ease 0s",
                    maxHeight: "60px", 
                    maxWidth: "60px", 
                    height: "60px",
                    width: "60px",
                    zIndex: 1505,
                    left: "50%",
                    top: "50%"
                 }}
                  className="dx-overlay-content dx-loadpanel-content">
                    
        <div className="dx-loadpanel-content-wrapper">
            <div className="dx-loadpanel-indicator dx-loadindicator dx-widget">
                <div className="dx-loadindicator-wrapper">
                    <div className="dx-loadindicator-content">
                        <div className="dx-loadindicator-icon">
                            <div className="dx-loadindicator-segment dx-loadindicator-segment2">
                                <div className="dx-loadindicator-segment-inner"></div>
                            </div>
                            <div className="dx-loadindicator-segment dx-loadindicator-segment1">
                                <div className="dx-loadindicator-segment-inner"></div>
                            </div>
                            <div className="dx-loadindicator-segment dx-loadindicator-segment0">
                                <div className="dx-loadindicator-segment-inner"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}