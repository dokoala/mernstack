import express, { application } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express;

app.use(bodyParser.json({limit: "30mb", extende: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extende: true}));
//bodyParser : req.body 데이터를 원하는 형태로 parsing하여 가져올 수 있음.
app.use(cors);

