import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';

 //Icons
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// Casecading Styleheet
import '../CasecadingStylesheets/Categories.css';

const useStyles = makeStyles({
    root: {
        height: 240,
        flexGrow: 1,
        maxWidth: 400,
    },
});

export default function CategoriesTree() {
    const classes = useStyles();

    return (
        <div>
            <DropdownButton
                as={ButtonGroup}
                // key={direction}
                id="dropdown-button-drop-categories"
                drop="down"
                variant="secondary"
                title="Categories"
            >
                <DropdownButton
                    as={ButtonGroup}
                    // key={direction}
                    id="dropdown-button-drop-electronics"
                    drop="right"
                    variant="secondary"
                    title="Electronics"
                >
                    <DropdownButton
                        as={ButtonGroup}
                        // key={direction}
                        id="dropdown-button-drop-electronics"
                        drop="right"
                        variant="secondary"
                        title="Electronics"
                    >
                        <Dropdown.Item eventKey="1">Example</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton
                        as={ButtonGroup}
                        // key={direction}
                        id="dropdown-button-drop-electronics"
                        drop="right"
                        variant="secondary"
                        title="Electronics"
                    >
                        <Dropdown.Item eventKey="1">Example</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton
                        as={ButtonGroup}
                        // key={direction}
                        id="dropdown-button-drop-electronics"
                        drop="right"
                        variant="secondary"
                        title="Electronics"
                    >
                        <Dropdown.Item eventKey="1">Example</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton
                        as={ButtonGroup}
                        // key={direction}
                        id="dropdown-button-drop-electronics"
                        drop="right"
                        variant="secondary"
                        title="Electronics"
                    >
                        <Dropdown.Item eventKey="1">Example</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton
                        as={ButtonGroup}
                        // key={direction}
                        id="dropdown-button-drop-electronics"
                        drop="right"
                        variant="secondary"
                        title="Electronics"
                    >
                        <Dropdown.Item eventKey="1">Example</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                </DropdownButton>
                <DropdownButton
                    as={ButtonGroup}
                    // key={direction}
                    id="dropdown-button-drop-electronics"
                    drop="right"
                    variant="secondary"
                    title="Electronics Appliances"
                >
                    <Dropdown.Item eventKey="1">Example</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                    as={ButtonGroup}
                    // key={direction}
                    id="dropdown-button-drop-electronics"
                    drop="right"
                    variant="secondary"
                    title="Electronics"
                >
                    <Dropdown.Item eventKey="1">Example</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                    as={ButtonGroup}
                    // key={direction}
                    id="dropdown-button-drop-electronics"
                    drop="right"
                    variant="secondary"
                    title="Electronics"
                >
                    <Dropdown.Item eventKey="1">Example</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                    as={ButtonGroup}
                    // key={direction}
                    id="dropdown-button-drop-electronics"
                    drop="right"
                    variant="secondary"
                    title="Electronics"
                >
                    <Dropdown.Item eventKey="1">Example</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                    as={ButtonGroup}
                    // key={direction}
                    id="dropdown-button-drop-electronics"
                    drop="right"
                    variant="secondary"
                    title="Electronics"
                >
                    <Dropdown.Item eventKey="1">Example</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                    as={ButtonGroup}
                    // key={direction}
                    id="dropdown-button-drop-electronics"
                    drop="right"
                    variant="secondary"
                    title="Electronics"
                >
                    <Dropdown.Item eventKey="1">Example</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                    as={ButtonGroup}
                    // key={direction}
                    id="dropdown-button-drop-electronics"
                    drop="right"
                    variant="secondary"
                    title="Electronics"
                >
                    <Dropdown.Item eventKey="1">Example</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
                {/* <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item> */}
            </DropdownButton>{' '}
        </div>
    );
}