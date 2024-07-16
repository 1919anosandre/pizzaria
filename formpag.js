* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
  font-family: 'Nunito Sans', sans-serif;
  text-transform: capitalize;
}

body {
  background-color: rgba(14, 13, 13, 0.952);
  height: 100%;
}

header nav ul li {
  display: flex;
  top: 0;
  align-items: center;
  justify-content: center;
  background: #23232e;
  width: 100%;
}

@keyframes floatUpDown {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-20px);
  }
}

@keyframes mudarCor {
  0% {
    color: red;
  }

  50% {
    color: rgb(255, 187, 0);
  }

  100% {
    color: orangered;
  }
}

.logo_pizzaria {
  font-size: 20px;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  margin-right: 100px;
  font-weight: 600;
  font-style: italic;
  animation: mudarCor 3s infinite;
}

.logo_pizzaria img {
  animation: floatUpDown 3s ease-in-out infinite alternate;
  margin-right: 10px;
  width: 55px;

}

main {
  height: 100%;
  width: 100%;
}

.Caixa_Formpag {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
  background-color: rgb(49, 53, 53);
  border-radius: 10px;
  border: 1px solid rgb(78, 74, 74);

  width: 100%;
  max-width: 500px;
  height: 590px;
}

.Caixa_FormCartao {
  display: flex;
  flex-direction: column;
}

.Caixa_FormCartao input {
  background-color: #ffffff;
  color: rgb(39, 34, 34);
  border-radius: 6px;
  border: 1px solid gray;
  width: 70%;
  padding: 10px;
  margin: 0 12px 10px;
  margin-top: 10px;
}

.Caixa_Formpag button {
  width: 50%;
  background-color: rgba(17, 14, 14, 0.925);
  color: #ffffff;
  padding: 7px;
  border-radius: 7px;
  margin: 0 100px;
  margin-top: 10px;
  font-size: 14px;
  letter-spacing: 2px;
}

.Caixa_Formpag button:hover {
  cursor: pointer;
  background-color: #23232e;

  transform: scale(1.01);
  transition: 1s;
}

.Caixa_Formpag h1 {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: rgb(255, 255, 255);
  margin: 0 12px;

}


.Form-Pag-Img {
  display: flex;
  justify-content: space-around;
  margin-right: 150px;
}

.Form-Pag-Img img {
  width: 110px;
  height: 90px;
  padding: 0 7%;
}

.Form-Pag-Img img:hover {
  cursor: pointer;
  transform: scale(1.05);
  transition: 1s;
}


.Caixa_FormPix {
  display: flex;
}

.Caixa_FormDinheiro {
  display: none;
}

footer {
  text-align: center;
  font-size: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
  color: white;
  font-weight: 800;
  margin-top: 10px;
}

.Caixa_FormCartao, .Caixa_FormPix, .Caixa_FormDinheiro {
  opacity: 0;
  display: none;
  transition: opacity 0.5s ease-in-out;
}

.Caixa_FormCartao.visible, .Caixa_FormPix.visible, .Caixa_FormDinheiro.visible {
  display: block;
  opacity: 1;
}

.FormCartao, .FormPix, .FormDinheiro {
  cursor: pointer;
}

.FormCartao, .FormPix, .FormDinheiro {
  border: none;
  transition: border 0.5s ease-in-out;
}

@media all and (max-width : 767px){
.Caixa_Formpag{
width: 90%;
}
.Caixa_Formpag h1{
font-size: 1.1rem;
}

.Form-Pag-Img {
  margin: 0 3px;
}
.Form-Pag-Img img{
  width: 90px;
  height: auto;
}

}
