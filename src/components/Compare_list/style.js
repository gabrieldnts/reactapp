import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:center;

  margin-top: 50px;
`
export const Repository = styled.div`
  width:250px;
  background:#fff;
  border-radius:3px;

  display:flex;
  flex-direction:column;
  margin:0 10px;

  header{
    padding:30px;
    display:flex;
    flex-direction:column;
    align-items:center;

    img{
      width:64px;
    }
    strong{
      font-size:24px;
      margin-top:10px;
    }
    small{
      color:#666;
      font-size:14px;
    }
    .fa-trash{
      flex:1;
      color:#DC143C;
    }
    .fa-refresh{
      color:#6495ED;
    }
  };
  ul{
    list-style:none;
    li{
      padding:12px 20px;
      font-weight:bold;

      small{
        font-weight:normal;
        font-size:12px;
        color:#999;
        font-style:italic;
      }
    }
      &:nth-child(2n){
        background-color:#D3D3D3;
      }
    
  }

`
