import * as React from "react"

interface Props {
    value: string,
    placeholder: string,
    as: "input" | "textarea",
    onInput: (str: string) => void;
}

type State = {
    isFocused: boolean;
}

export class Input extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isFocused: false
        };
    }

    render(): JSX.Element | null {
        const value = (() => {
            if (this.props.value == "") {
                return this.props.placeholder;
            } else {
                return this.props.value;
            }
        })();
        return (
            <div className="input">
                <div className="input__background">{value}</div>
                {(() => {
                    if (this.props.as == "input") {
                        return (
                            <input
                                value={this.props.value}
                                placeholder={this.props.placeholder}
                                className="input__foreground"
                                onChange={e => this.props.onInput(e.target.value)}
                            />
                        );
                    } else if (this.props.as == "textarea") {
                        return (
                            <textarea
                                value={this.props.value}
                                placeholder={this.props.placeholder}
                                className="input__foreground"
                                onChange={e => this.props.onInput(e.target.value)}
                            />
                        );
                    }
                })()}
            </div>
        );
    }
}