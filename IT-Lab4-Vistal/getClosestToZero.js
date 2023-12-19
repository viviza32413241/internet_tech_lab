function getClosestToZero(...args) {
    let closest = args[0];
    for (let i = 1; i < args.length; i++) {
        if (Math.abs(args[i]) < Math.abs(closest)) {
            closest = args[i];
        }
    }

    return closest;
}