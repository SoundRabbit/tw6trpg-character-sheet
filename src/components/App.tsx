import * as React from "react"
import { Form, Button } from "react-bootstrap"

type Props = {}

type State = {
    character: Character;
}

type Character = {
    name: string;
    race: string;
    job: string;
    damage: number;
    exp: number;
    description: string;
    ubelCodes: UbelCode[];
    items: Item[];
    skills: Skills;
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

type Skills = Map<string, number>

export class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    render(): JSX.Element | null {
        return (
            <div />
        );
    }
}