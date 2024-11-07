const app = {
    data() {
        return {
            contactos: [],
            nuevoNombre: '',
            nuevoTelefono: '',
            nuevaCategoria: 'Familia',
        }
    },
    methods: {
        agregarContacto() {
            if (this.nuevoNombre && this.nuevoTelefono && this.nuevaCategoria) {
                this.contactos.push({
                    nombre: this.nuevoNombre,
                    telefono: this.nuevoTelefono,
                    categoria: this.nuevaCategoria,
                    mensajes: 0,
                    llamadas: 0
                });
                this.nuevoNombre = '';
                this.nuevoTelefono = '';
                this.nuevaCategoria = 'Familia';
            }
        },
        eliminarContacto(index) {
            this.contactos.splice(index, 1);
        },
        cambiarMensajes(index, cantidad) {
            const nuevoValor = this.contactos[index].mensajes + cantidad;
            if (nuevoValor >= 0 && nuevoValor <= 25) {
                this.contactos[index].mensajes = nuevoValor;
            }
        },
        cambiarLlamadas(index, cantidad) {
            const nuevoValor = this.contactos[index].llamadas + cantidad;
            if (nuevoValor >= 0 && nuevoValor <= 15) {
                this.contactos[index].llamadas = nuevoValor;
            }
        }
    },
    computed: {
        totalContactos() {
            return this.contactos.length;
        },
        totalMensajes() {
            return this.contactos.reduce((acc, contacto) => acc + contacto.mensajes, 0);
        },
        totalLlamadas() {
            return this.contactos.reduce((acc, contacto) => acc + contacto.llamadas, 0);
        }
    }
};

Vue.createApp(app).mount('#app');
