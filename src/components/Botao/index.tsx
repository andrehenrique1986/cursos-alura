import React from "react";
import style from './Botao.module.scss';




interface BotaoProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{}


class Botao extends React.Component<BotaoProps, {
    type?: "button" | "submit" | "reset" | undefined
}> {
   
        render() {
          return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;