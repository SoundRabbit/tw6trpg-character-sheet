import * as React from "react"

type Props = {}

type State = {
    character: Character;
}

type Character = {
    name: string;
    title: string;
    catchphrase: string;
    race: string;
    mainJob: string;
    subJob: string;
    damage: number;
    exp: number;
    description: string;
    ubelCodes: UbelCode[];
    items: Item[];
    skills: Skill[];
}

type UbelCode = {
    name: string,
    aria: string,
    customTexts: string[],
    description: string,
}

type Item = {
    name: string,
    level: number,
}

type Skill = {
    name: string,
    level: number,
}

export class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            character: {
                name: "猟兵の名前",
                title: "称号",
                catchphrase: "キャッチフレーズ",
                race: "種族",
                mainJob: "メインジョブ",
                subJob: "サブジョブ",
                damage: 0,
                exp: 0,
                description: "",
                ubelCodes: [{
                    name: "",
                    aria: "",
                    customTexts: [],
                    description: "",
                }],
                items: [],
                skills: [],
            }
        }
    }

    render(): JSX.Element | null {
        return (
            <div className="app">
                <div className="app__menu">
                    <div className="h-menu">
                        <button className="h-menu__btn">ファイルとして保存</button>
                        <button className="h-menu__btn">ファイルから読み込み</button>
                    </div>
                </div>
                <div className="character">
                    <div className="character__container">
                        <div className="character__container">
                            <div className="character__name-container">
                                <div className="character__title" contentEditable="true">{this.state.character.title}</div>
                                <div className="character__name" contentEditable="true">{this.state.character.name}</div>
                            </div>
                            <div className="character__catchphrase" contentEditable="true">{this.state.character.catchphrase}</div>
                        </div>
                        <div className="character__description" contentEditable="true">{this.state.character.description}</div>
                        <div className="character__container">
                            <div className="character__race" contentEditable="true">{this.state.character.race}</div>
                            <div>
                                <span className="character__main-job" contentEditable="true">{this.state.character.mainJob}</span>
                                ×
                                <span className="character__sub-job" contentEditable="true">{this.state.character.subJob}</span>
                            </div>
                        </div>
                    </div>
                    <div className="character__img-container">
                        <img
                            className="character__img"
                            src="https://cdn.tw6.jp/i/tw6/basic/1185/1000834_f11857_bu.png"
                        />
                    </div>
                    <div className="character__ubel-code-list">
                        {(() =>
                            this.state.character.ubelCodes.map(ubelCode =>
                                <div className="ubel-code">
                                    <div className="ubel-code__name" contentEditable="true">{ubelCode.name}</div>
                                    <div className="ubel-code__aria" contentEditable="true">{ubelCode.aria}</div>
                                    <div className="ubel-code__custom-text-list">
                                        {(() =>
                                            ubelCode.customTexts.map((customText, idx) =>
                                                <div className="ubel-code__custom-text" contentEditable="true" data-idx={idx}>{customText}</div>
                                            )
                                        )()}
                                    </div>
                                    <div className="ubel-code__description" contentEditable="true">{ubelCode.description}</div>
                                    <div className="ubel-code__description" >
                                        {ubelCode.customTexts.reduce(
                                            (description, customText, customTextIdx) =>
                                                description.replace(new RegExp(`【${customTextIdx}】`, "g"), `【${customText}】`),
                                            ubelCode.description
                                        )}
                                    </div>
                                </div>
                            )
                        )()}
                    </div>
                    <div className="character__item-list">
                        {(() =>
                            this.state.character.items.map(item =>
                                <div className="item">
                                    <input className="item__name" value={item.name} />
                                    <input className="item__level" value={item.level} />
                                </div>
                            )
                        )()}
                    </div>
                    <div className="character__skill-list">
                        {(() =>
                            this.state.character.skills.map(item =>
                                <div className="item">
                                    <input className="item__name" value={item.name} />
                                    <input className="item__level" value={item.level} />
                                </div>
                            )
                        )()}
                    </div>
                </div>
            </div >
        );
    }
}