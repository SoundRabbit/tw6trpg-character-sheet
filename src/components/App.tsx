import * as React from "react"

import * as Decoder from "Decoder"

import { Input } from "./Input"

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

const ubelCodeDecoder: Decoder.Decoder<UbelCode> = Decoder.object({
    name: Decoder.string,
    aria: Decoder.string,
    description: Decoder.string,
});

const itemDecoder: Decoder.Decoder<Item> = Decoder.object({
    name: Decoder.string,
    level: Decoder.number
});

const skillDecoder: Decoder.Decoder<Skill> = Decoder.object({
    name: Decoder.string,
    level: Decoder.number
});

const characterDecoder: Decoder.Decoder<Character> = Decoder.object({
    name: Decoder.string,
    title: Decoder.string,
    catchphrase: Decoder.string,
    race: Decoder.string,
    mainJob: Decoder.string,
    subJob: Decoder.string,
    damage: Decoder.number,
    exp: Decoder.number,
    img: Decoder.string,
    description: Decoder.string,
    ubelCodes: Decoder.array(ubelCodeDecoder),
    items: Decoder.array(itemDecoder),
    skills: Decoder.array(skillDecoder)
});

export class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            character: {
                name: "",
                title: "",
                catchphrase: "",
                race: "",
                mainJob: "",
                subJob: "",
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
            name: "",
            aria: "",
            description: ""
        });
        this.setState({
            character: Object.assign({}, this.state.character)
        });
    }

    addItem() {
        this.state.character.items.push({
            name: "",
            level: 1
        });
        this.setState({
            character: Object.assign({}, this.state.character)
        });
    }

    addSkill() {
        this.state.character.skills.push({
            name: "",
            level: 1
        });
        this.setState({
            character: Object.assign({}, this.state.character)
        });
    }

    setDamage(damage: number) {
        this.state.character.damage = damage;
        this.setState({
            character: Object.assign({}, this.state.character)
        });
    }

    setTitle(title: string) {
        this.state.character.title = title;
        this.setState({
            character: Object.assign({}, this.state.character)
        });
    }

    setName(name: string) {
        this.state.character.name = name;
        this.setState({
            character: Object.assign({}, this.state.character)
        });
    }

    setCatchphrase(catchphrase: string) {
        this.state.character.catchphrase = catchphrase;
        this.setState({
            character: Object.assign({}, this.state.character)
        });
    }

    setDescription(description: string) {
        this.state.character.description = description.replace(/\r?\n/g, "");
        this.setState({
            character: Object.assign({}, this.state.character)
        });
    }

    setRace(race: string) {
        this.state.character.race = race;
        this.setState({
            character: Object.assign({}, this.state.character)
        });
    }

    setMainJob(mainJob: string) {
        this.state.character.mainJob = mainJob;
        this.setState({
            character: Object.assign({}, this.state.character)
        });
    }

    setSubJob(subJob: string) {
        this.state.character.subJob = subJob;
        this.setState({
            character: Object.assign({}, this.state.character)
        });
    }

    setUbelCodeName(idx: number, name: string) {
        this.state.character.ubelCodes[idx].name = name.replace(/\r?\n/g, "");
        this.setState({
            character: Object.assign({}, this.state.character)
        });
    }

    setUbelCodeAria(idx: number, aria: string) {
        this.state.character.ubelCodes[idx].aria = aria.replace(/\r?\n/g, "");
        this.setState({
            character: Object.assign({}, this.state.character)
        });
    }

    setUbelCodeDescription(idx: number, description: string) {
        this.state.character.ubelCodes[idx].description = description.replace(/\r?\n/g, "");
        this.setState({
            character: Object.assign({}, this.state.character)
        });
    }

    setItemName(idx: number, name: string) {
        this.state.character.items[idx].name = name.replace(/\r?\n/g, "");
        this.setState({
            character: Object.assign({}, this.state.character)
        });
    }

    setItemLevel(idx: number, level: number) {
        this.state.character.items[idx].level = level;
        this.setState({
            character: Object.assign({}, this.state.character)
        });
    }

    setSkillName(idx: number, name: string) {
        this.state.character.skills[idx].name = name.replace(/\r?\n/g, "");
        this.setState({
            character: Object.assign({}, this.state.character)
        });
    }

    setSkillLevel(idx: number, level: number) {
        this.state.character.skills[idx].level = level;
        this.setState({
            character: Object.assign({}, this.state.character)
        });
    }

    setImageFromDialog() {
        const dummyElement = document.createElement("input");
        dummyElement.type = "file";
        dummyElement.accept = "image/*";
        dummyElement.onchange = (e: Event) => {
            const target = e.target as HTMLInputElement;
            if (!target.files) { return; }

            const file = target.files[0];

            const fileReader = new FileReader();
            fileReader.onload = () => {
                const result = fileReader.result;
                if (typeof result == "string") {
                    this.state.character.img = result;
                    this.setState({
                        character: Object.assign({}, this.state.character)
                    });
                }
            }
            fileReader.readAsDataURL(file);
        }
        dummyElement.click();
    }

    saveToLocal() {
        const dummyElement = document.createElement("a");
        dummyElement.href = "data:text/plain," + encodeURIComponent(JSON.stringify(this.state.character));
        dummyElement.download = this.state.character.name + ".json";
        dummyElement.style.display = "none";
        dummyElement.click();
        document.appendChild(dummyElement);
        dummyElement.click();
        document.removeChild(dummyElement);
    }

    loadFromLocal() {
        const dummyElement = document.createElement("input");
        dummyElement.type = "file";
        dummyElement.accept = ".json, text/plain";
        dummyElement.onchange = (e: Event) => {
            const target = e.target as HTMLInputElement;
            if (!target.files) { return; }

            const file = target.files[0];

            const fileReader = new FileReader();
            fileReader.onload = () => {
                const result = fileReader.result;
                if (typeof result == "string") {
                    try {
                        this.setState({
                            character: characterDecoder(JSON.parse(result))
                        });
                    } catch (err) {
                        console.log(err);
                        alert("ファイルの読み込みに失敗しました。");
                    }
                }
            }
            fileReader.readAsText(file);
        }
        dummyElement.click();
    }

    render(): JSX.Element | null {
        return (
            <div className="app">
                <div className="app__menu">
                    <div className="h-menu">
                        <button className="h-menu__btn" onClick={() => this.saveToLocal()}>ファイルとして保存</button>
                        <button className="h-menu__btn" onClick={() => this.loadFromLocal()}>ファイルから読み込み</button>
                    </div>
                </div>
                <div className="character">
                    <div className="character__container">
                        <div className="character__container">
                            <div className="character__name-container">
                                <div className="character__title">
                                    <Input
                                        value={this.state.character.title}
                                        placeholder="称号"
                                        as="input"
                                        onInput={this.setTitle.bind(this)}
                                    />
                                </div>
                                <div className="character__name">
                                    <Input
                                        value={this.state.character.name}
                                        placeholder="猟兵の名前"
                                        as="input"
                                        onInput={this.setName.bind(this)}
                                    />
                                </div>
                            </div>
                            <div className="character__catchphrase">
                                <Input
                                    value={this.state.character.catchphrase}
                                    placeholder="キャッチフレーズ"
                                    as="input"
                                    onInput={this.setCatchphrase.bind(this)}
                                />
                            </div>
                        </div>
                        <div className="character__description">
                            <Input
                                value={this.state.character.description}
                                placeholder="説明"
                                as="textarea"
                                onInput={this.setDescription.bind(this)}
                            />
                        </div>
                        <div className="character__container">
                            <div className="character__race">
                                <Input
                                    value={this.state.character.race}
                                    placeholder="種族"
                                    as="input"
                                    onInput={this.setRace.bind(this)}
                                />
                            </div>
                            <div className="character__job-container">
                                <span className="character__main-job">
                                    <Input
                                        value={this.state.character.mainJob}
                                        placeholder="メインジョブ"
                                        as="input"
                                        onInput={this.setMainJob.bind(this)}
                                    />
                                </span>
                                <span>×</span>
                                <span className="character__sub-job">
                                    <Input
                                        value={this.state.character.subJob}
                                        placeholder="サブジョブ"
                                        as="input"
                                        onInput={this.setSubJob.bind(this)}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="character__img-container">
                        <img
                            className="character__img"
                            src={this.state.character.img}
                            onClick={() => this.setImageFromDialog()}
                        />
                        <div className="character__damage">
                            <span
                                className={`character__damage-circle--${this.state.character.damage > 0}`}
                                onClick={() => {
                                    if (this.state.character.damage > 0) {
                                        this.setDamage(0);
                                    } else {
                                        this.setDamage(1);
                                    }
                                }}
                            />
                            <span
                                className={`character__damage-circle--${this.state.character.damage > 1}`}
                                onClick={() => {
                                    if (this.state.character.damage > 1) {
                                        this.setDamage(1);
                                    } else {
                                        this.setDamage(2);
                                    }
                                }}
                            />
                            <span
                                className={`character__damage-circle--${this.state.character.damage > 2}`}
                                onClick={() => {
                                    if (this.state.character.damage > 2) {
                                        this.setDamage(2);
                                    } else {
                                        this.setDamage(3);
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className="character__ubel-code-list">
                        {(() =>
                            this.state.character.ubelCodes.map((ubelCode, idx) =>
                                <div className="ubel-code">
                                    <div className="ubel-code__name">
                                        <Input
                                            value={ubelCode.name}
                                            placeholder="ユーベルコード名"
                                            as="textarea"
                                            onInput={str => this.setUbelCodeName(idx, str)}
                                        />
                                    </div>
                                    <div className="ubel-code__aria">
                                        <Input
                                            value={ubelCode.aria}
                                            placeholder="詠唱内容"
                                            as="textarea"
                                            onInput={str => this.setUbelCodeAria(idx, str)}
                                        />
                                    </div>
                                    <div className="ubel-code__description">
                                        <Input
                                            value={ubelCode.description}
                                            placeholder="説明"
                                            as="textarea"
                                            onInput={str => this.setUbelCodeDescription(idx, str)}
                                        />
                                    </div>
                                </div>
                            )
                        )()}
                        <button className="character__list-btn" onClick={() => this.addUbelCode()}>+</button>
                    </div>
                    <div className="character__item-list">
                        {(() =>
                            this.state.character.items.map((item, idx) =>
                                <div className="item">
                                    <div className="item__name">
                                        <Input
                                            value={item.name}
                                            placeholder="アイテム名"
                                            as="textarea"
                                            onInput={str => this.setSkillName(idx, str)}
                                        />
                                    </div>
                                    <div className="item__level">
                                        <Input
                                            value={item.level.toString()}
                                            placeholder="アイテムレベル"
                                            as="input"
                                            onInput={str => {
                                                const level = Number(str);
                                                if (!isNaN(level)) {
                                                    this.setSkillLevel(idx, level)
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                            )
                        )()}
                        <button className="character__list-btn" onClick={() => this.addItem()}>+</button>
                    </div>
                    <div className="character__skill-list">
                        {(() =>
                            this.state.character.skills.map((skill, idx) =>
                                <div className="skill">
                                    <div className="skill__name">
                                        <Input
                                            value={skill.name}
                                            placeholder="スキル名"
                                            as="textarea"
                                            onInput={str => this.setItemName(idx, str)}
                                        />
                                    </div>
                                    <div className="skill__level">
                                        <Input
                                            value={skill.level.toString()}
                                            placeholder="スキルレベル"
                                            as="input"
                                            onInput={str => {
                                                const level = Number(str);
                                                if (!isNaN(level)) {
                                                    this.setItemLevel(idx, level)
                                                }
                                            }}
                                        />
                                    </div>
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