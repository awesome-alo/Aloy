import React, { useState, useEffect } from 'react';

function RunningStatus(processFn: Promise<{}> ){
    const [status, setStatus] = useState({
        isRunning: false,
        isError: false,
    })

    useEffect(() => {

    })
}