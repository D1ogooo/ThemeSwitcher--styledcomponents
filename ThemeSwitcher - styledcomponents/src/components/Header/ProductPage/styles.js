import styled from 'styled-components'

export const Container = styled.div`
 width: 100%;
 padding: 70px 50px;
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
`

export const ProductImage = styled.img.attrs({
  src: "../../../../public/productImage.png",
  alt: "appWatchTime",
})`
 width: 400px;
 pointer-events: none;
`

export const ProductTextContainer = styled.div`
 max-width: 500px;
 padding-top: 40px;
`

export const ProductTitle = styled.p`
 font-size: 40px;
 font-weight: bold;
`

export const ProductDescription = styled.p`
 padding-top: 30px;
 font-size: 18px;
`

export const ProductButton = styled.button`
 background-color: ${({ theme }) => theme.button.background};
 color: ${({ theme }) => theme.button.color};
 margin-top: 30px;
 width: 200px;
 height: 40px;
 cursor: pointer;
 font-size: 18px;
 font-weight: bold;
 border: ${({ theme }) => theme.button.border};
 border-radius: 5px;
 transition: 0.5s;
 &:hover {
  font-size:  ${({ theme })=> theme.button.fontHover};
 }
`