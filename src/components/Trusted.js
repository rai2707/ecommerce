import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src="https://1000logos.net/wp-content/uploads/2022/07/Logo-ATT.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://www.pngitem.com/pimgs/m/524-5244589_grey-disney-logo-transparent-hd-png-download.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://www.pngkey.com/png/detail/136-1367625_mastercard-logo-mastercard-silver-png.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://cdn.logojoy.com/wp-content/uploads/2018/08/23162125/apple-logo-1024x728.png"
              alt="trusted-brands"
            />
          </div>
          
          <div className="slide">
            <img
              src="https://officebranding.bg/wp-content/uploads/2018/03/oracle.png"
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;