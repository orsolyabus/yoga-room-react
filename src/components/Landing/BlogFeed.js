// i18n
import React from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardGroup } from "mdbreact";

const BlogFeed = () => (
  <MDBContainer fluid className="BlogFeed p-4">
    <MDBCardGroup  deck className="content"> 
      <MDBCard >
        <MDBCardBody>
          Blog post 1
        </MDBCardBody>
      </MDBCard>
      <MDBCard >
        <MDBCardBody>
          Blog post 2
        </MDBCardBody>
      </MDBCard>
      <MDBCard >
        <MDBCardBody>
          Blog post 3
        </MDBCardBody>
      </MDBCard>
      <MDBCard >
        <MDBCardBody>
          Blog post 4
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  </MDBContainer>
);

export default BlogFeed;