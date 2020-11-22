import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardContent, Grid, Card } from '@material-ui/core';
import image1 from '../Component/img1.jpg';
import image2 from '../Component/img2.jpg';
import styled from 'styled-components';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginTop: 30,
    },
});

const Img = styled.img`
 border: 2px;
 border-radius: 50%;
 padding: 10px;
 display: block;
 margin-left: auto;
 margin-right: auto;
 width: 50%;
`

const Row = styled.div` 
 display: table; 
 width: 50%; 
 table-layout: fixed; 
 border-spacing: 0px; 
 text-align: center;
`
const Column = styled.div` 
 display: table-cell; 
 text-align: center;
`

const Select = styled.select`
 background-color: #282c34;
 color: white;
 margin: 10px;
 width: 30%;
 height: 25px;
 border-radius: .5em;
 font-size: 14px;
 marginTop: 30px;
 text-align: center;
`

function Isi(props) {
    return (
        <div>
            <Img src={props.src} /><br />
            <a>{props.nama}</a><br />
            <a>{props.nim}</a>
        </div>
    )
}

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Row>
                <Column>
                    <Card className={classes.root}>
                        <CardContent>
                            <Isi nama="Daffa Shidqi H" nim="21120117130041" src={image1} />
                            <Select>
                                <option value="1">Kelas</option>
                                <option value="2">A</option>
                                <option value="3">B</option>
                            </Select>
                        </CardContent>
                    </Card>
                </Column>

                <Column>
                    <Card className={classes.root}>
                        <CardContent>
                            <Isi nama="Kukuh Pranata S" nim="21120117120007" src={image2} />
                            <Select>
                                <option value="1">Kelas</option>
                                <option value="2">A</option>
                                <option value="3">B</option>
                            </Select>
                        </CardContent>
                    </Card>
                </Column>
            </Row >
        </Grid>

    );
}
