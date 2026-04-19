/*
Заданий клас "Turtle"
class Turtle
{
    int x, y;
    char direct;  //'u', 'd', 'r', 'l'
    public Turtle(int x = 0, int y = 0, char d = 'r') { ...}
}
Забезпечте черепаху методами ToLeft і ToRight, щоб вона могла, залишаючись на місці, повертати ліворуч і праворуч.
*/
//BEGIN
class Turtle 
{ 
    int x, y;
    public char direct; 
    
    public Turtle (int x = 0, int y = 0, char d = 'r')
    {
        this.x = x;
        this.y = y;
        this.direct = d;
    }
  
    public void ToLeft()
    {
        switch (direct)
        {
            case 'u': direct = 'l'; break;
            case 'l': direct = 'd'; break;
            case 'd': direct = 'r'; break;
            case 'r': direct = 'u'; break;
        }
    }

    public void ToRight()
    {
        switch (direct)
        {
           case 'u': direct = 'r'; break;
           case 'r': direct = 'd'; break;
           case 'd': direct = 'l'; break;
           case 'l': direct = 'u'; break; 
        }
    }
}
//END