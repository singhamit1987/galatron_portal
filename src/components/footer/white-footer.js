import React from 'react';
import { FOOTER_JSON } from '../../constant/translate'

export default function White_footer() {
    return (
        <>
            <div class="container_fluid white_footer">
            <div class="footer">
                    
                    <div class="address">{FOOTER_JSON.address}</div>
                    <div class="powered show_desktop">{FOOTER_JSON.powered_by}</div>
                    <div class="bottom_links">
                        <ul>
                        <li><a href="/terms">{FOOTER_JSON.terms}</a></li>
                            <li><a href="/cookie">{FOOTER_JSON.cookie}</a></li>
                            <li><a href="/privacy">{FOOTER_JSON.privacy}</a></li>
                        </ul>
                    </div>
                    <div class="powered show_mobile">{FOOTER_JSON.powered_by}</div>
                </div>
            </div>
        
        </>
    )
}