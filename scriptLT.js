const app1 = {
    data() {
        return {
            colorFondo: '#a5f785',
            nombre: '',
            validacion: 'Escribe un nombre mayor a 3 letras',
            clase: 0,
            nuevaTarea: '',
            tareas: [],
            tamanioFuente: 16,
            ordenTareas: 'nombre'
        };
    },
    methods: {
        validar() {
            if (this.nombre.length == 0) {
                this.validacion = 'Escribe un mínimo de 4 letras';
                this.clase = 0;
            } else if (this.nombre.length > 0 && this.nombre.length < 4) {
                this.validacion = 'Nombre inválido';
                this.clase = 2;
            } else {
                this.validacion = 'Nombre válido';
                this.clase = 1;
            }
        },
        agregarTarea() {
            if (this.nuevaTarea.trim() !== '') {
                const prioridad = prompt("Prioridad de la tarea (alta, media, baja):") || 'baja';
                this.tareas.push({ texto: this.nuevaTarea, completada: false, prioridad: prioridad, fecha: new Date() });
                this.nuevaTarea = '';
            }
        },
        toggleTarea(index) {
            this.tareas[index].completada = !this.tareas[index].completada;
        }
    },
    computed: {
        colorValidacion() {
            return {
                colorNegro: this.clase == 0,
                colorVerde: this.clase == 1,
                colorRojo: this.clase == 2
            };
        },
        porcentajeCompletado() {
            const completadas = this.tareas.filter(tarea => tarea.completada).length;
            return (completadas / this.tareas.length) * 100 || 0;
        },
        tareasOrdenadas() {
            return [...this.tareas].sort((a, b) => {
                if (this.ordenTareas === 'nombre') {
                    return a.texto.localeCompare(b.texto);
                } else if (this.ordenTareas === 'fecha') {
                    return new Date(b.fecha) - new Date(a.fecha);
                } else if (this.ordenTareas === 'prioridad') {
                    const prioridad = { alta: 1, media: 2, baja: 3 };
                    return prioridad[a.prioridad] - prioridad[b.prioridad];
                }
            });
        }
    }
};

Vue.createApp(app1).mount('#seccion');
