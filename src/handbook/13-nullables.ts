namespace Nullables{
    let name = "hey";
    name = null; // -- strictNullChecks in tsconfig

    let altName: string | null;
    altName = null;

    // terser operator
    let value = altName || "default value";
}