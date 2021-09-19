import React from "react";
import { Button } from "semantic-ui-react";
export const Footer = () => {
    return (
        <div className="footer" >
            <hr />
            <p>
                This site will offer you the best planning of your daily life.
            </p>
            <p>For any further assistance, please contact us.</p>
            <Button circular color="facebook" icon="facebook" />
            <Button circular color="twitter" icon="twitter" />
            <Button circular color="linkedin" icon="linkedin" />
            <Button circular color="google plus" icon="google plus" />
        </div>
    );
};
