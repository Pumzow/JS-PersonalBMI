function solve(name, age, weight, height)
{

    let personalInfo ={
        age: age,
        weight: weight,
        height: height,
    }

    let user ={
        name: name,
        personalInfo: personalInfo,
    }

    let hTW = height/100;
    let userBMI = Math.round(weight/ (hTW*hTW));

    user.BMI = userBMI;


    if(user.BMI < 18.5)
    {
        user.status = 'underweight';
    }
    else if(user.BMI < 25)
    {
        user.status = 'normal';
    }
    else if(user.BMI < 30)
    {
        user.status = 'overweight';
    }
    else
    {
        user.status = 'obese';
        user.recommendation = 'admission required';
    }

    return user;
}

console.log(solve("Ivan", 19, 66, 178));