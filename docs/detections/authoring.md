---
title: Authoring detections
sidebar_position: 2
---

Each detection you create occupies a directory under the `detections/` directory in your Matano directory.

A detection directory has the following structure:
```
my-matano-directory
├── detections
│   └── my_detection
│       ├── detect.py
│       ├── requirements.txt
│       └── detection.yml
```

## Detection script

*Detection scripts* are Python programs containing the logic of your detection. To create a detection script, create a file called `detect.py` in your detection directory.

Inside the detection script, you define the following functions:

The `detect` function is the python function that is invoked for your detection. The function will be invoked with a data record.

The function has the following signature:

```python
def detect(record) -> bool | None:
    ...
```

### Returning values from your detection

Your `detect` function must return a boolean `True` to signal an alert. A return value of `False` or `None` will be interpreted as no alert for detection on that record.

### Deduping alerts

You can dedupe alerts using a dedupe string.

## Detection configuration file (`detection.yml`)

Each detection requires a configuration file named `detection.yml`. The file has the following structure:

```yml
name: "my_detection" # The name of the detection
log_sources: # An array of log sources for which to run the detection
    - "main-cloudtrail-logs"
    - "my-zeek-logs"
```

## Python requirements

You can add a `requirements.txt` file to the detection directory to make PyPI dependencies available to your detection program. The listed dependencies will be installed and made available to your program.