# Toy problems [![Build Status](https://travis-ci.com/AlbertLapTu/Toy-problems.svg?branch=master)](https://travis-ci.com/AlbertLapTu/Toy-problems)

# Description

This repository logs toy problems that I encounter online to prepare for upcoming interview or staying sharp. You can run a few of the scaffolding tools built out
meant to create the file within the appropriate folder(s) when first tackling a problem, and writing the results of your attempt to a google sheet to keep track of your progress.

## Motivation

Going back and forth between an IDE and the Google drive interface to log my progress was cumbersome. I wanted a simpler solution to this, and preferred to stay within an IDE at all times if possible.

### Instructions

The following command generates a primary "solution" file and secondary "index" file to the directory you specificy.
Solution file being the contents of the question that you solve.
Index file being the contents you want to write to your Google sheet tracker.

run `npm run build`

The next command requests the path of which file(s) you have just finished writing notes for, and will automatically update your google sheets. 

run `npm run update`
