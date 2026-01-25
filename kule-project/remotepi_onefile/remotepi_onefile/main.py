# main.py — RemotePi UI (one-file) 800x480 (KV fixed)

from kivy.config import Config

Config.set("graphics", "width", "800")
Config.set("graphics", "height", "480")
Config.set("graphics", "fullscreen", "0")   # Pi'de 1 yaparsın
Config.set("graphics", "borderless", "0")   # Pi'de 1 yaparsın
Config.set("input", "mouse", "mouse,disable_multitouch")

from kivy.app import App
from kivy.lang import Builder
from kivy.clock import Clock
from kivy.properties import StringProperty, NumericProperty, BooleanProperty

# (Gerekli olabilir) KV tarafındaki @Screen/@BoxLayout vb. için importlar
from kivy.uix.screenmanager import ScreenManager, Screen
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.gridlayout import GridLayout
from kivy.uix.label import Label
from kivy.uix.button import Button


KV = r"""
#:kivy 2.2.0

<StatusBar@BoxLayout>:
    size_hint_y: None
    height: 48
    padding: 8
    spacing: 10
    canvas.before:
        Color:
            rgba: 0.08, 0.08, 0.09, 1
        Rectangle:
            pos: self.pos
            size: self.size

    Label:
        text: "STATE: " + app.state
        size_hint_x: 0.22
    Label:
        text: "WiFi " + ("OK" if app.net_wifi else "OFF")
        size_hint_x: 0.14
    Label:
        text: "BT " + ("OK" if app.net_bt else "OFF")
        size_hint_x: 0.12
    Button:
        text: "BAT: " + app.battery_view
        size_hint_x: 0.26
        on_release: app.toggle_battery_view()
    Button:
        text: "MENU"
        size_hint_x: 0.14
        on_release: app.go_menu()
    Button:
        text: "HELP"
        size_hint_x: 0.12
        on_release: app.toast("Help: sag bardan CAL/STOP, ust bardan MENU")

<RightIconBar@BoxLayout>:
    orientation: "vertical"
    size_hint_x: None
    width: 200
    spacing: 8
    padding: 6
    canvas.before:
        Color:
            rgba: 0.10, 0.10, 0.12, 1
        Rectangle:
            pos: self.pos
            size: self.size

    Button:
        text: "CAM"
        font_size: "18sp"
        on_release: app.toast("CAM page TBD")
    Button:
        text: "NET"
        font_size: "18sp"
        on_release: app.toast("NET page TBD")
    Button:
        text: "LOG"
        font_size: "18sp"
        on_release: app.toast("LOG page TBD")
    Button:
        text: "CAL"
        font_size: "18sp"
        on_release: app.go_calibration()
    Button:
        text: "STOP"
        font_size: "18sp"
        on_release: app.on_stop()

<StartScreen@Screen>:
    name: "start"
    BoxLayout:
        orientation: "vertical"
        StatusBar:
        BoxLayout:
            padding: 12
            spacing: 12

            BoxLayout:
                orientation: "vertical"
                spacing: 10
                canvas.before:
                    Color:
                        rgba: 0.07, 0.07, 0.08, 1
                    Rectangle:
                        pos: self.pos
                        size: self.size

                Label:
                    text: "RemotePi — START"
                    font_size: "26sp"
                    size_hint_y: None
                    height: 48
                Button:
                    text: "START (RUN)"
                    font_size: "22sp"
                    size_hint_y: None
                    height: 70
                    on_release: app.on_start()
                Button:
                    text: "MENU"
                    font_size: "22sp"
                    size_hint_y: None
                    height: 70
                    on_release: app.go_menu()
                Label:
                    text: "Not: RUN aktif degilken joystick komutu gonderilmez."
                    font_size: "16sp"
                    color: 0.7, 0.7, 0.7, 1

            RightIconBar:

<MainScreen@Screen>:
    name: "main"
    BoxLayout:
        orientation: "vertical"
        StatusBar:
        BoxLayout:
            padding: 12
            spacing: 12

            BoxLayout:
                orientation: "vertical"
                spacing: 10
                canvas.before:
                    Color:
                        rgba: 0.07, 0.07, 0.08, 1
                    Rectangle:
                        pos: self.pos
                        size: self.size

                Label:
                    text: "OPERATIONS"
                    font_size: "22sp"
                    size_hint_y: None
                    height: 40

                GridLayout:
                    cols: 2
                    spacing: 8
                    Label:
                        text: "J1 X: " + str(round(app.j1x, 3))
                    Label:
                        text: "J1 Y: " + str(round(app.j1y, 3))
                    Label:
                        text: "J2 X: " + str(round(app.j2x, 3))
                    Label:
                        text: "J2 Y: " + str(round(app.j2y, 3))

                Button:
                    text: "AUTONOM"
                    font_size: "20sp"
                    size_hint_y: None
                    height: 64
                    on_release: app.toggle_autonom()

                Button:
                    text: "BACK"
                    font_size: "20sp"
                    size_hint_y: None
                    height: 64
                    on_release: app.go_start()

            RightIconBar:

<MenuScreen@Screen>:
    name: "menu"
    BoxLayout:
        orientation: "vertical"
        StatusBar:
        BoxLayout:
            padding: 12
            spacing: 12

            BoxLayout:
                orientation: "vertical"
                spacing: 10
                canvas.before:
                    Color:
                        rgba: 0.07, 0.07, 0.08, 1
                    Rectangle:
                        pos: self.pos
                        size: self.size

                Label:
                    text: "MENU — MasterPi / RemotePi"
                    font_size: "22sp"
                    size_hint_y: None
                    height: 40

                Button:
                    text: "Ag Ayarlari"
                    font_size: "18sp"
                    on_release: app.toast("Ag Ayarlari TBD")
                Button:
                    text: "Kalibrasyon"
                    font_size: "18sp"
                    on_release: app.go_calibration()
                Button:
                    text: "Hiz Limitleri"
                    font_size: "18sp"
                    on_release: app.toast("Hiz Limitleri TBD")
                Button:
                    text: "Joystick Egrileri"
                    font_size: "18sp"
                    on_release: app.toast("Joystick Egrileri TBD")
                Button:
                    text: "Sensor Sayfalari"
                    font_size: "18sp"
                    on_release: app.toast("Sensor Sayfalari TBD")
                Button:
                    text: "Log"
                    font_size: "18sp"
                    on_release: app.toast("Log TBD")
                Button:
                    text: "Geri"
                    font_size: "18sp"
                    on_release: app.go_start()

            RightIconBar:

<CalibrationScreen@Screen>:
    name: "cal"
    BoxLayout:
        orientation: "vertical"
        StatusBar:
        BoxLayout:
            padding: 12
            spacing: 12

            BoxLayout:
                orientation: "vertical"
                spacing: 10
                canvas.before:
                    Color:
                        rgba: 0.07, 0.07, 0.08, 1
                    Rectangle:
                        pos: self.pos
                        size: self.size

                Label:
                    text: "JOYSTICK CALIBRATION"
                    font_size: "22sp"
                    size_hint_y: None
                    height: 40

                GridLayout:
                    cols: 2
                    spacing: 8
                    Label:
                        text: "RAW J1X"
                    Label:
                        text: str(app.raw_j1x)
                    Label:
                        text: "RAW J1Y"
                    Label:
                        text: str(app.raw_j1y)
                    Label:
                        text: "RAW J2X"
                    Label:
                        text: str(app.raw_j2x)
                    Label:
                        text: "RAW J2Y"
                    Label:
                        text: str(app.raw_j2y)
                    Label:
                        text: "DZ"
                    Label:
                        text: str(round(app.deadzone, 3))
                    Label:
                        text: "EXPO"
                    Label:
                        text: str(round(app.expo, 3))

                BoxLayout:
                    spacing: 8
                    size_hint_y: None
                    height: 64
                    Button:
                        text: "CENTER AL"
                        on_release: app.cal_center()
                    Button:
                        text: "MIN/MAX (10s)"
                        on_release: app.cal_collect_minmax(10.0)

                BoxLayout:
                    spacing: 8
                    size_hint_y: None
                    height: 64
                    Button:
                        text: "HESAPLA"
                        on_release: app.cal_compute()
                    Button:
                        text: "KAYDET"
                        on_release: app.cal_save()

                Button:
                    text: "Geri"
                    size_hint_y: None
                    height: 56
                    on_release: app.go_menu()

            RightIconBar:

ScreenManager:
    StartScreen:
    MainScreen:
    MenuScreen:
    CalibrationScreen:
"""


class RemotePiOneFileApp(App):
    state = StringProperty("IDLE")
    battery_view = StringProperty("RemotePi")
    net_wifi = BooleanProperty(False)
    net_bt = BooleanProperty(False)

    j1x = NumericProperty(0.0)
    j1y = NumericProperty(0.0)
    j2x = NumericProperty(0.0)
    j2y = NumericProperty(0.0)

    raw_j1x = NumericProperty(0)
    raw_j1y = NumericProperty(0)
    raw_j2x = NumericProperty(0)
    raw_j2y = NumericProperty(0)

    deadzone = NumericProperty(0.06)
    expo = NumericProperty(0.35)

    def build(self):
        self.title = "RemotePi UI (One File)"
        root = Builder.load_string(KV)
        Clock.schedule_interval(self.tick_20hz, 0.05)  # 20 Hz
        return root

    # Navigation
    def go_start(self): self.root.current = "start"
    def go_main(self): self.root.current = "main"
    def go_menu(self): self.root.current = "menu"
    def go_calibration(self): self.root.current = "cal"

    # UI actions
    def toggle_battery_view(self):
        self.battery_view = "MasterPi" if self.battery_view == "RemotePi" else "RemotePi"

    def on_start(self):
        self.state = "RUN"
        self.go_main()

    def on_stop(self):
        self.state = "IDLE"
        self.toast("STOP → SAFE (UI demo)")

    def toggle_autonom(self):
        self.toast("AUTONOM (TBD)")

    def toast(self, msg: str):
        print("[TOAST]", msg)

    # Calibration (demo)
    def cal_center(self):
        self.toast("CENTER set (demo)")

    def cal_collect_minmax(self, seconds: float):
        self.toast(f"MIN/MAX collecting {seconds}s (demo)")

    def cal_compute(self):
        self.deadzone = max(0.02, min(0.20, float(self.deadzone)))
        self.toast(f"COMPUTED: DZ={self.deadzone:.3f} (demo)")

    def cal_save(self):
        self.toast("CAL saved (demo)")

    # 20Hz demo tick
   def tick_20hz(self, dt):
    # 1) ADS1115 dene (yoksa simülasyon)
    try:
        # ADS1115 okumak için: pip install adafruit-circuitpython-ads1x15
        import board
        import busio
        from adafruit_ads1x15.ads1115 import ADS1115
        from adafruit_ads1x15.analog_in import AnalogIn

        if not hasattr(self, "_ads_inited"):
            self._i2c = busio.I2C(board.SCL, board.SDA)
            self._ads = ADS1115(self._i2c)
            # 4 kanal örneği (joystick için 4 eksen)
            self._ch0 = AnalogIn(self._ads, 0)
            self._ch1 = AnalogIn(self._ads, 1)
            self._ch2 = AnalogIn(self._ads, 2)
            self._ch3 = AnalogIn(self._ads, 3)
            self._ads_inited = True

        # ADS1115 raw 0-65535 gibi geliyor; burada 0-32767'e mapliyoruz
        def to_15bit(v):  # v: 0..65535
            v = max(0, min(65535, int(v)))
            return int(v / 65535 * 32767)

        self.raw_j1x = to_15bit(self._ch0.value)
        self.raw_j1y = to_15bit(self._ch1.value)
        self.raw_j2x = to_15bit(self._ch2.value)
        self.raw_j2y = to_15bit(self._ch3.value)

        # normalize: -1..1
        def norm(raw):
            return (raw / 32767.0) * 2.0 - 1.0

        self.j1x = norm(self.raw_j1x)
        self.j1y = norm(self.raw_j1y)
        self.j2x = norm(self.raw_j2x)
        self.j2y = norm(self.raw_j2y)

    except Exception:
        # ADS yoksa simülasyon devam (UI kırılmasın)
        import math
        t = Clock.get_boottime()
        self.j1x = math.sin(t) * 0.95
        self.j1y = math.cos(t) * 0.95
        self.j2x = math.sin(t * 0.7) * 0.95
        self.j2y = math.cos(t * 0.7) * 0.95

        self.raw_j1x = int((self.j1x * 0.5 + 0.5) * 32767)
        self.raw_j1y = int((self.j1y * 0.5 + 0.5) * 32767)
        self.raw_j2x = int((self.j2x * 0.5 + 0.5) * 32767)
        self.raw_j2y = int((self.j2y * 0.5 + 0.5) * 32767)



if __name__ == "__main__":
    RemotePiOneFileApp().run()
