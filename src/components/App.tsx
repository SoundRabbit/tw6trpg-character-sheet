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
    img: string;
    description: string;
    ubelCodes: UbelCode[];
    items: Item[];
    skills: Skill[];
}

type UbelCode = {
    name: string,
    aria: string,
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
                img: "",
                damage: 0,
                exp: 0,
                description: "",
                ubelCodes: [],
                items: [],
                skills: [],
            }
        }
    }

    addUbelCode() {
        this.state.character.ubelCodes.push({
            name: "ユーベルコード名",
            aria: "詠唱内容",
            description: "説明"
        });
        this.setState({
            character: Object.assign({}, this.state.character)
        });
    }

    addItem() {
        this.state.character.items.push({
            name: "アイテム名",
            level: 1
        });
        this.setState({
            character: Object.assign({}, this.state.character)
        });
    }

    addSkill() {
        this.state.character.skills.push({
            name: "技能名",
            level: 1
        });
        this.setState({
            character: Object.assign({}, this.state.character)
        });
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
                            src={this.state.character.img}
                        />
                        <div className="character__damage">
                            <span className={`character__damage-circle--${this.state.character.damage > 0}`} />
                            <span className={`character__damage-circle--${this.state.character.damage > 1}`} />
                            <span className={`character__damage-circle--${this.state.character.damage > 2}`} />
                        </div>
                    </div>
                    <div className="character__ubel-code-list">
                        {(() =>
                            this.state.character.ubelCodes.map(ubelCode =>
                                <div className="ubel-code">
                                    <div className="ubel-code__name" contentEditable="true">{ubelCode.name}</div>
                                    <div className="ubel-code__aria" contentEditable="true">{ubelCode.aria}</div>
                                    <div className="ubel-code__description" contentEditable="true">{ubelCode.description}</div>
                                </div>
                            )
                        )()}
                        <button className="character__list-btn" onClick={() => this.addUbelCode()}>+</button>
                    </div>
                    <div className="character__item-list">
                        {(() =>
                            this.state.character.items.map(item =>
                                <div className="item">
                                    <div className="item__name" contentEditable="true">{item.name}</div>
                                    <div className="item__level" contentEditable="true">{item.level}</div>
                                </div>
                            )
                        )()}
                        <button className="character__list-btn" onClick={() => this.addItem()}>+</button>
                    </div>
                    <div className="character__skill-list">
                        {(() =>
                            this.state.character.skills.map(skill =>
                                <div className="skill">
                                    <div className="skill__name" contentEditable="true">{skill.name}</div>
                                    <div className="skill__level" contentEditable="true">{skill.level}</div>
                                </div>
                            )
                        )()}
                        <button className="character__list-btn" onClick={() => this.addSkill()}>+</button>
                    </div>
                </div>
            </div >
        );
    }
}