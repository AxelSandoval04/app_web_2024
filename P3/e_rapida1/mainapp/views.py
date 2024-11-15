from django.shortcuts import render,HttpResponse

# Create your views here.

def index(request):
    mensaje='Hola soy un Mensaje'
    return render(request,'mainapp/index.html',{
        'title':'inicio','content':'.: !Bienvenido¡ :.','mensaje':mensaje
    })

def about(request):
    return render(request,'mainapp/about.html',{'title':'Acerca de:', 'content':'Somos un equipo de Desarrollo Web'})

def mision(request):
    # contenido="""<h3>"Formar profesionistas altamente capacitados en competencias tecnológicas y humanísticas, comprometidos con la excelencia, la innovación, y el desarrollo sostenible. La UTD busca contribuir al crecimiento socioeconómico regional y nacional, mediante la educación integral, el fomento a la investigación, y la vinculación efectiva con el sector productivo y la comunidad."<h/3
    # """
    # return HttpResponse(contenido)
    return render(request,'mainapp/vision.html',{'title':'Nuesta vision:', 'content':'Nuestra vision es la siguiente:','mensaje':'"Formar profesionistas altamente capacitados en competencias tecnológicas y humanísticas, comprometidos con la excelencia, la innovación, y el desarrollo sostenible. La UTD busca contribuir al crecimiento socioeconómico regional y nacional, mediante la educación integral, el fomento a la investigación, y la vinculación efectiva con el sector productivo y la comunidad.'})

def vision(request):
    return render(request,'mainapp/vision.html',{'title':'Nuesta vision:', 'content':'Nuestra vision es la siguiente:','mensaje':'"Ser una institución líder en educación superior tecnológica, reconocida por su calidad, innovación, y compromiso con el desarrollo económico y social de la región y el país, formando profesionales altamente capacitados y con valores que contribuyan al crecimiento sostenible."'})