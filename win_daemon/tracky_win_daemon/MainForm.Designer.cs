using System.ComponentModel;

namespace TrackWinDaemon {
    partial class MainForm {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing) {
            if (disposing && (components != null)) {
                components.Dispose();
            }

            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent() {
            System.ComponentModel.ComponentResourceManager resources =
                new System.ComponentModel.ComponentResourceManager(typeof(MainForm));
            this.listen = new System.Windows.Forms.CheckBox();
            this.SuspendLayout();
            // 
            // listen
            // 
            this.listen.Checked = true;
            this.listen.CheckState = System.Windows.Forms.CheckState.Checked;
            this.listen.Location = new System.Drawing.Point(12, 12);
            this.listen.Name = "listen";
            this.listen.Size = new System.Drawing.Size(150, 50);
            this.listen.TabIndex = 0;
            this.listen.Text = "Listen?";
            this.listen.UseVisualStyleBackColor = true;
            this.listen.CheckedChanged += new System.EventHandler(this.checkBox1_CheckedChanged);
            // 
            // MainForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(13F, 32F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(459, 79);
            this.Controls.Add(this.listen);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
            this.Icon = ((System.Drawing.Icon) (resources.GetObject("$this.Icon")));
            this.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.Name = "MainForm";
            this.Text = "TrackyWinDaemon";
            this.ResumeLayout(false);
        }

        #endregion

        private System.Windows.Forms.CheckBox listen;
    }
}