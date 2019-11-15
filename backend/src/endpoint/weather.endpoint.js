import weatherClient from '../clients/api.client'

/** get the weather forcast */
exports.getWeather = (req, res, next) => {

    weatherClient.getInfo()
        .then(data => {
            res.status(200).json(data)

        })
        .catch(err => {
            res.status(500).json({
                msg: err
            })
            next(err);
        });


}

exports.getWeatherMock = (req, res, next) => {
    console.log('mock.....')
    res.status(200).json( [{
            "rain": {
                "value": 23.15
            },
            "sample_date": {
                "value": "2019-03-19T00:56:00.000Z"
            }
        },
        {
            "rain": {
                "value": 25.72
            },
            "sample_date": {
                "value": "2019-03-19T01:59:00.000Z"
            }
        },
        {
            "rain": {
                "value": 26.75
            },
            "sample_date": {
                "value": "2019-03-19T02:56:00.000Z"
            }
        },
        {
            "rain": {
                "value": 22.64
            },
            "sample_date": {
                "value": "2019-03-19T03:56:00.000Z"
            }
        },
        {
            "rain": {
                "value": 17.49
            },
            "sample_date": {
                "value": "2019-03-19T04:52:00.000Z"
            }
        },
        {
            "rain": {
                "value": 19.55
            },
            "sample_date": {
                "value": "2019-03-19T05:56:00.000Z"
            }
        },
        {
            "rain": {
                "value": 20.06
            },
            "sample_date": {
                "value": "2019-03-19T06:53:00.000Z"
            }
        },
        {
            "rain": {
                "value": 20.58
            },
            "sample_date": {
                "value": "2019-03-19T07:52:00.000Z"
            }
        },
        {
            "rain": {
                "value": 17.49
            },
            "sample_date": {
                "value": "2019-03-19T08:50:00.000Z"
            }
        },
        {
            "rain": {
                "value": 15.95
            },
            "sample_date": {
                "value": "2019-03-19T09:58:00.000Z"
            }
        },
        {
            "rain": {
                "value": 16.46
            },
            "sample_date": {
                "value": "2019-03-19T10:48:00.000Z"
            }
        },
        {
            "rain": {
                "value": 18.52
            },
            "sample_date": {
                "value": "2019-03-19T12:47:00.000Z"
            }
        },
        {
            "rain": {
                "value": 16.46
            },
            "sample_date": {
                "value": "2019-03-19T13:48:00.000Z"
            }
        },
        {
            "rain": {
                "value": 15.43
            },
            "sample_date": {
                "value": "2019-03-19T14:48:00.000Z"
            }
        },
        {
            "rain": {
                "value": 15.43
            },
            "sample_date": {
                "value": "2019-03-19T15:56:00.000Z"
            }
        },
        {
            "rain": {
                "value": 16.98
            },
            "sample_date": {
                "value": "2019-03-19T16:50:00.000Z"
            }
        },
        {
            "rain": {
                "value": null
            },
            "sample_date": {
                "value": "2019-03-19T17:52:00.000Z"
            }
        },
        {
            "rain": {
                "value": 19.55
            },
            "sample_date": {
                "value": "2019-03-19T18:50:00.000Z"
            }
        },
        {
            "rain": {
                "value": 20.06
            },
            "sample_date": {
                "value": "2019-03-19T19:53:00.000Z"
            }
        },
        {
            "rain": {
                "value": 19.55
            },
            "sample_date": {
                "value": "2019-03-19T20:47:00.000Z"
            }
        },
        {
            "rain": {
                "value": 20.06
            },
            "sample_date": {
                "value": "2019-03-19T21:50:00.000Z"
            }
        },
        {
            "rain": {
                "value": 21.61
            },
            "sample_date": {
                "value": "2019-03-19T22:56:00.000Z"
            }
        }
    ]);
}