import {
  Button as AntButton,
  Card as AntCard,
} from 'antd'
import styled from 'styled-components'

export const Card = styled(AntCard)`
  background-color: ${(props) => props.color || 'white'};
  box-shadow: ${(props) => props.shadow || '0px 4px 16px rgba(0, 0, 0, 0.08)'};
  border-radius: ${(props) => props.radius || '12px'};

  .ant-card-body {
    padding: 10px;
    height: auto;
    display: flex;
    flex-direction: column;
  }
`

export const MainActionButton = styled(AntButton)`
  .AddUserbutton {
    padding: 10px;
  }
  ${(props) => {
    if (props.cancel) {
      return `
        min-width: 150px;
        font-family: "Manrope";
        background: ${'#e0e0e0'};
        border-color: #AFB7DC;
        color: #AFB7DC;
        font-weight: 700
        line-height: 1.2;
        font-size:12px;
        width:100%;
        border-radius: 8px !important;
        letter-spacing: 0.5px;
        text-transform: ${(props) => props.transform || 'none'};
          &:hover, &:focus, &:active {
            color: #AFB7DC;
            border-color: #AFB7DC;
          }
    `
    } else if (props.danger) {
      return `
					min-width: 150px;
								font-family: "Manrope"; 
                font-weight: 700;
								width:100%;
								line-height: 1.2;
								letter-spacing: 0.5px;
								font-size:12px;
								border-radius: 8px !important;
								text-transform: ${(props) => props.transform || 'none'};
								color: white;
								background: #FF6767;
								border-color: #FF6767;
									&:hover {
										color: white;
										border-color: #FF6767;
										background-color: #FF6767;
									}
									&:focus {
										color: white;
										border-color: #FF6767;
										background-color: #FF6767;
									}									
      `
    } else {
      return `
								.anticon {
											display: inline-block;
											color: inherit;
											font-style: normal;
											line-height: 0;
											text-align: center;
											text-transform: none;
											vertical-align: 1px;
											text-rendering: optimizelegibility;
											-webkit-font-smoothing: antialiased;
											-moz-osx-font-smoothing: grayscale;
								}
								.ant-btn>span {
											display: inline-block;
								}
								.ant-btn>.anticon {
											line-height: 1;
								}
      		min-width: 150px;
								font-family: "Manrope";
                font-weight: 700;
								width:100%;
								line-height: 1.2;
								letter-spacing: 0.5px;
								font-size:12px;
								border-radius: 8px !important;
								text-transform: ${(props) => props.transform || 'none'};
								color: white;
								background: ${'#6870fa'};
								border-color: ${'#6870fa'};
                &:hover, &:focus {
                  color: ${'#6870fa'};
                  border-color: ${'#6870fa'};
                }							
      `
    }
  }}
`
