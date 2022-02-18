import React from "react";
import { Spinner as SpinnerBootstrap } from "react-bootstrap";

export const Spinner: React.FC = () => {
  return (
    <div className="spinner-custom">
      <SpinnerBootstrap animation="border" />
    </div>
  );
};
