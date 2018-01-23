namespace EnumAdvanced {
    enum Color {
        White = 1,
        Red,
        Blue
    }

    enum ColorStrings {
        White = "white",
        Red = "red",
        Blue = "blue"
    }

    enum HybridColor {
        White = 1,
        Red = "red"
    }

    function getValue(x: number): number{
        return x;
    }

    enum ColorComputed {
        Pink = 0,
        White = getValue(1),
        Red = getValue(2),
        Blue = getValue(3),
    }

    enum Roles {
        Anon = 0,
        Member = 1,
        Admin = 2,
        SuperAdmin = 4,
        All = Member | Admin | SuperAdmin
    }

    // special semantics when just literals
    enum Shapes {
        Circle,
        Square
    }

    interface Circle {
        kind: Shapes.Circle;
        radius: number;
    }

    let c: Circle = {
        radius: 3,
        kind: Shapes.Circle
    }

    // catching dead code
    function f(s: Shapes){
        if(s != Shapes.Circle || s!= Shapes.Square){

        }
    }

    // reverse mapping
    let valueOfRole = Roles.Admin;
    let nameOfRole = Roles[4]; // Admin
    


}