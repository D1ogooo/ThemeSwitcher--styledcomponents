import styled from 'styled-components'

export const Container = styled.header`
 width: 100%;
 height: 60px;
 border-bottom: 1px solid #bbb;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 40px 50px;
`

export const Logo = styled.img.attrs(props => ({
	src: props.themeImage === 'light' ? "../../../public/logoLight.png" : "../../../public/logoDark.png",
	alt: "logoLight"
}))`
 width: 150px;
`

export const NavContainer = styled.ul`
 display: flex;
 gap: 10px;
 list-style: none;
`

export const NavItem = styled.li`
 cursor: pointer;
 transition: 0.4s;
  &:hover {
    color: #ff0044;
	}
	display: flex;
	align-items: center;
`

export const ChangeTheme = styled.img.attrs((props) => ({
	src: props.themeImage == 'light' ? '/moon.png' : '/sun.png',
	alt: "",
}))`
 cursor: pointer;
 width: 28px;
`
